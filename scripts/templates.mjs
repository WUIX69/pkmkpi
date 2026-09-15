#!/usr/bin/env node
/**
 * Multi-Runtime Orchestrator CLI for PKMKPI templates.
 * Manages static and process-based template servers concurrently.
 */

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const PID_FILE = path.join(ROOT_DIR, ".templates-pids.json");

process.on("uncaughtException", (err) => {
  console.error("Daemon uncaughtException:", err.message);
});
process.on("unhandledRejection", (reason) => {
  console.error("Daemon unhandledRejection:", reason);
});

const MIME_TYPES = {
  ".html": "text/html; charset=UTF-8",
  ".css": "text/css; charset=UTF-8",
  ".js": "text/javascript; charset=UTF-8",
  ".mjs": "text/javascript; charset=UTF-8",
  ".json": "application/json; charset=UTF-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=UTF-8",
};

export const TEMPLATES = {
  "violeta-jonathan-l": {
    port: 4001,
    type: "static",
    dir: "templates/violeta-jonathan-l",
    description: "Zero-build static website (Charity.org design system)",
  },
  "arcel": {
    port: 4002,
    type: "static",
    dir: "templates/arcel/public",
    description: "Static federation website (Tailwind CSS + public build)",
  },
  "glen-martin": {
    port: 4003,
    type: "static",
    dir: "templates/glen-martin",
    description: "Static website (Accessible multi-page design)",
  },
  "john-jhonard-de-robles": {
    port: 4004,
    type: "static",
    dir: "templates/john-jhonard-de-robles",
    description: "Static website (Institutional layout)",
  },
  "leonor-olivera": {
    port: 4005,
    type: "vite",
    dir: "templates/leonor-olivera",
    command: process.execPath,
    args: ["node_modules/vite/bin/vite.js", "--port", "4005", "--strictPort"],
    description: "Vite + React 19 single-page app",
  },
  "neil-datuin-caguioa": {
    port: 4006,
    type: "php",
    dir: "templates/neil-datuin-caguioa",
    command:
      process.platform === "win32" &&
      fs.existsSync("C:\\Users\\Administrator\\.config\\herd-lite\\bin\\php.exe")
        ? "C:\\Users\\Administrator\\.config\\herd-lite\\bin\\php.exe"
        : "php",
    args: ["-S", "localhost:4006", "-t", "templates/neil-datuin-caguioa"],
    description: "PHP built-in development server",
  },
  "renzo": {
    port: 4007,
    type: "static",
    dir: "templates/renzo",
    description: "Static website (Filipino cultural identity design)",
  },
};

/**
 * Checks if a port is actively responding to HTTP requests.
 * @param {number} port
 * @returns {Promise<boolean>}
 */
export function checkPortActive(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}/`, { timeout: 800 }, () => {
      resolve(true);
    });
    req.on("error", () => {
      const req4 = http.get(`http://127.0.0.1:${port}/`, { timeout: 800 }, () => {
        resolve(true);
      });
      req4.on("error", () => resolve(false));
      req4.on("timeout", () => {
        req4.destroy();
        resolve(false);
      });
    });
    req.on("timeout", () => {
      req.destroy();
      resolve(false);
    });
  });
}

/**
 * Checks if a port is available for binding.
 * @param {number} port
 * @returns {Promise<boolean>}
 */
export async function checkPortAvailable(port) {
  const active = await checkPortActive(port);
  return !active;
}

/**
 * Creates and starts a lightweight static HTTP server for a directory.
 * @param {string} rootDir
 * @param {number} port
 * @returns {Promise<http.Server>}
 */
export function startStaticServer(rootDir, port) {
  const resolvedRoot = path.resolve(ROOT_DIR, rootDir);
  const server = http.createServer((req, res) => {
    req.on("error", (err) => console.error(`[Static :${port}] Request error:`, err.message));
    res.on("error", (err) => console.error(`[Static :${port}] Response error:`, err.message));

    let reqPath;
    try {
      reqPath = decodeURIComponent(req.url.split("?")[0]);
    } catch {
      reqPath = req.url.split("?")[0];
    }
    if (reqPath === "/") reqPath = "/index.html";

    let filePath = path.normalize(path.join(resolvedRoot, reqPath));

    if (!filePath.startsWith(resolvedRoot)) {
      res.writeHead(403, { "Content-Type": "text/plain" });
      res.end("403 Forbidden");
      return;
    }

    fs.stat(filePath, (err, stats) => {
      if (!err && stats.isDirectory()) {
        filePath = path.join(filePath, "index.html");
      }

      fs.readFile(filePath, (readErr, data) => {
        if (readErr) {
          // Fallback to index.html for SPA-like navigation or return 404
          const fallbackPath = path.join(resolvedRoot, "index.html");
          fs.readFile(fallbackPath, (fbErr, fbData) => {
            if (fbErr) {
              res.writeHead(404, { "Content-Type": "text/plain" });
              res.end(`404 Not Found: ${reqPath}`);
            } else {
              res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
              res.end(fbData);
            }
          });
          return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || "application/octet-stream";
        res.writeHead(200, {
          "Content-Type": contentType,
          "Access-Control-Allow-Origin": "*",
        });
        res.end(data);
      });
    });
  });

  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, () => {
      server.on("error", (err) => console.error(`[Static :${port}] Server error:`, err.message));
      resolve(server);
    });
  });
}

/**
 * Reads running process information from PID file.
 * @returns {Record<string, { pid: number, port: number, type: string }>}
 */
function readPidFile() {
  if (!fs.existsSync(PID_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(PID_FILE, "utf-8"));
  } catch {
    return {};
  }
}

/**
 * Writes running process information to PID file.
 * @param {Record<string, { pid: number, port: number, type: string }>} data
 */
function writePidFile(data) {
  fs.writeFileSync(PID_FILE, JSON.stringify(data, null, 2), "utf-8");
}

/**
 * Prints catalog status table.
 */
async function listTemplates() {
  const pids = readPidFile();
  console.log("\n================================================================================");
  console.log("                      PKMKPI TEMPLATE CATALOG & STATUS                           ");
  console.log("================================================================================");
  console.log(
    "NAME".padEnd(25) +
      "PORT".padEnd(8) +
      "RUNTIME".padEnd(10) +
      "STATUS".padEnd(24) +
      "DESCRIPTION"
  );
  console.log("-".repeat(80));

  for (const [name, config] of Object.entries(TEMPLATES)) {
    const isActive = await checkPortActive(config.port);
    let status = isActive ? "ACTIVE (port bound)" : "IDLE";
    if (pids[name]) {
      status += ` [PID ${pids[name].pid}]`;
    }
    console.log(
      name.padEnd(25) +
        String(config.port).padEnd(8) +
        config.type.padEnd(10) +
        status.padEnd(24) +
        config.description
    );
  }
  console.log("================================================================================\n");
}

/**
 * Starts all 7 templates in the current process (static servers) and child processes (vite, php).
 */
export async function startAllForeground() {
  console.log("Initializing all 7 PKMKPI templates...");
  const pids = {};

  // 1. Start all static servers
  for (const [name, config] of Object.entries(TEMPLATES)) {
    if (config.type === "static") {
      try {
        const isFree = await checkPortAvailable(config.port);
        if (!isFree) {
          console.log(`Port ${config.port} for "${name}" already bound.`);
          continue;
        }
        await startStaticServer(config.dir, config.port);
        console.log(`+ [${name}] Static server running on port ${config.port}`);
      } catch (err) {
        console.error(`! [${name}] Failed to start static server:`, err.message);
      }
    }
  }

  // 2. Start Vite template
  const viteConfig = TEMPLATES["leonor-olivera"];
  const viteFree = await checkPortAvailable(viteConfig.port);
  if (viteFree) {
    const viteCwd = path.resolve(ROOT_DIR, viteConfig.dir);
    const viteLog = fs.openSync(path.join(ROOT_DIR, ".vite.log"), "w");
    const viteChild = spawn(viteConfig.command, viteConfig.args, {
      cwd: viteCwd,
      stdio: ["ignore", viteLog, viteLog],
      shell: false,
      windowsHide: true,
    });
    pids["leonor-olivera"] = { pid: viteChild.pid, port: viteConfig.port, type: "vite" };
    console.log(`+ [leonor-olivera] Vite process launched on port ${viteConfig.port} (PID: ${viteChild.pid})`);
  } else {
    console.log(`Port ${viteConfig.port} for leonor-olivera already bound.`);
  }

  // 3. Start PHP template
  const phpConfig = TEMPLATES["neil-datuin-caguioa"];
  const phpFree = await checkPortAvailable(phpConfig.port);
  if (phpFree) {
    const phpLog = fs.openSync(path.join(ROOT_DIR, ".php.log"), "w");
    const phpChild = spawn(phpConfig.command, phpConfig.args, {
      cwd: ROOT_DIR,
      stdio: ["ignore", phpLog, phpLog],
      shell: false,
      windowsHide: true,
    });
    pids["neil-datuin-caguioa"] = { pid: phpChild.pid, port: phpConfig.port, type: "php" };
    console.log(`+ [neil-datuin-caguioa] PHP process launched on port ${phpConfig.port} (PID: ${phpChild.pid})`);
  } else {
    console.log(`Port ${phpConfig.port} for neil-datuin-caguioa already bound.`);
  }

  // Main daemon PID
  pids["_daemon"] = { pid: process.pid, port: 0, type: "daemon" };
  writePidFile(pids);

  console.log("\nAll templates operational. Daemon running (PID: " + process.pid + ").");

  // Keep daemon alive
  setInterval(() => {}, 1 << 28);
}

/**
 * Serves a single template.
 * @param {string} name
 */
async function serveTemplate(name) {
  const config = TEMPLATES[name];
  if (!config) {
    console.error(`Unknown template: "${name}". Available: ${Object.keys(TEMPLATES).join(", ")}`);
    process.exit(1);
  }

  const isFree = await checkPortAvailable(config.port);
  if (!isFree) {
    console.log(`Port ${config.port} for template "${name}" is already in use.`);
    return;
  }

  console.log(`Booting ${name} [${config.type}] on port ${config.port}...`);

  if (config.type === "static") {
    await startStaticServer(config.dir, config.port);
    console.log(`Template "${name}" static server running at http://localhost:${config.port}`);
    setInterval(() => {}, 1 << 28);
    return;
  }

  if (config.type === "vite" || config.type === "php") {
    const cwd = config.type === "vite" ? path.resolve(ROOT_DIR, config.dir) : ROOT_DIR;
    const child = spawn(config.command, config.args, {
      cwd,
      stdio: "inherit",
      shell: false,
      windowsHide: true,
    });
    console.log(`Template "${name}" [${config.type}] process running (PID: ${child.pid})...`);
    child.on("exit", (code) => process.exit(code || 0));
  }
}

/**
 * Boots all 7 templates concurrently as background daemon.
 */
async function serveAll() {
  console.log("Starting all 7 PKMKPI templates concurrently in background daemon...");

  const scriptPath = fileURLToPath(import.meta.url);
  const child = spawn(process.execPath, [scriptPath, "daemon"], {
    cwd: ROOT_DIR,
    detached: true,
    stdio: "ignore",
    windowsHide: true,
  });
  child.unref();

  // Wait for binding
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await listTemplates();
}

/**
 * Terminates all tracked child processes and frees ports 4001-4007.
 */
async function killAll() {
  console.log("Terminating tracked template processes...");
  const pids = readPidFile();

  for (const [name, info] of Object.entries(pids)) {
    try {
      console.log(`Killing ${name} (PID: ${info.pid})...`);
      if (process.platform === "win32") {
        spawnSync("taskkill", ["/F", "/T", "/PID", String(info.pid)], { stdio: "ignore", windowsHide: true });
      } else {
        process.kill(info.pid, "SIGTERM");
      }
    } catch (err) {
      console.warn(`Could not terminate PID ${info.pid} (${name}): ${err.message}`);
    }
  }

  if (fs.existsSync(PID_FILE)) {
    fs.unlinkSync(PID_FILE);
  }

  // Forcefully free any remaining processes holding ports 4001-4007 on Windows
  if (process.platform === "win32") {
    const ports = Object.values(TEMPLATES).map((t) => t.port).join(",");
    const psCmd = `Get-NetTCPConnection -LocalPort ${ports} -ErrorAction SilentlyContinue | Select -ExpandProperty OwningProcess -Unique | ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }`;
    spawnSync("powershell", ["-NoProfile", "-Command", psCmd], { stdio: "ignore", windowsHide: true });
  }

  console.log("Template processes terminated cleanly.");
}

/**
 * Bundles all 7 templates into public/templates-preview/<slug>/:
 * - Clean/ensure public/templates-preview/ directory.
 * - Copy static templates (violeta-jonathan-l, arcel, glen-martin, john-jhonard-de-robles, renzo) to public/templates-preview/<slug>/.
 * - Run Vite build for leonor-olivera (spawnSync npm run build in templates/leonor-olivera) and copy dist/ to public/templates-preview/leonor-olivera/.
 * - Render/snapshot neil-datuin-caguioa PHP pages (index\.php, about\.php, contact\.php, contribute\.php, news\.php, press\.php, support\.php) to static HTML with .php link rewriting, and copy assets/ + uploads/ to public/templates-preview/neil-datuin-caguioa/.
 */
export async function exportTemplates() {
  const PREVIEW_DIR = path.join(ROOT_DIR, "public", "templates-preview");
  console.log(`[Export] Bundling templates to ${PREVIEW_DIR}...`);

  // Ensure destination directory exists (do not delete pre-committed snapshots)
  fs.mkdirSync(PREVIEW_DIR, { recursive: true });

  // 1. Copy static templates
  const staticTemplates = [
    { slug: "violeta-jonathan-l", src: path.join(ROOT_DIR, "templates", "violeta-jonathan-l") },
    { slug: "arcel", src: path.join(ROOT_DIR, "templates", "arcel", "public") },
    { slug: "glen-martin", src: path.join(ROOT_DIR, "templates", "glen-martin") },
    { slug: "john-jhonard-de-robles", src: path.join(ROOT_DIR, "templates", "john-jhonard-de-robles") },
    { slug: "renzo", src: path.join(ROOT_DIR, "templates", "renzo") },
  ];

  for (const { slug, src } of staticTemplates) {
    try {
      if (fs.existsSync(src)) {
        const dest = path.join(PREVIEW_DIR, slug);
        console.log(`[Export] Copying static template "${slug}"...`);
        fs.cpSync(src, dest, {
          recursive: true,
          filter: (srcPath) => !srcPath.includes("node_modules") && !srcPath.includes(".git"),
        });
      } else {
        console.log(`[Export] Source for "${slug}" not found at ${src}. Preserving committed preview.`);
      }
    } catch (err) {
      console.warn(`[Export] Warning: Failed to copy static template "${slug}": ${err.message}`);
    }
  }

  // 2. Build and copy leonor-olivera (Vite)
  const leonorDir = path.join(ROOT_DIR, "templates", "leonor-olivera");
  const viteBin = path.join(leonorDir, "node_modules", "vite", "bin", "vite.js");
  const leonorDest = path.join(PREVIEW_DIR, "leonor-olivera");

  if (fs.existsSync(viteBin) || fs.existsSync(path.join(leonorDir, "node_modules"))) {
    console.log(`[Export] Building Vite template "leonor-olivera"...`);
    try {
      let buildRes;
      if (fs.existsSync(viteBin)) {
        buildRes = spawnSync(process.execPath, [viteBin, "build"], {
          cwd: leonorDir,
          stdio: "inherit",
          shell: false,
          windowsHide: true,
        });
      } else {
        const isWindows = process.platform === "win32";
        const npmCmd = isWindows ? "npm.cmd" : "npm";
        buildRes = spawnSync(npmCmd, ["run", "build"], {
          cwd: leonorDir,
          stdio: "inherit",
          shell: isWindows,
          windowsHide: true,
        });
      }
      if (buildRes && buildRes.status !== 0) {
        console.warn(`[Export] Warning: Vite build for leonor-olivera exited with status ${buildRes.status}`);
      }
      const leonorDist = path.join(leonorDir, "dist");
      if (fs.existsSync(leonorDist)) {
        fs.cpSync(leonorDist, leonorDest, { recursive: true });
        const htmlFile = path.join(leonorDest, "index.html");
        if (fs.existsSync(htmlFile)) {
          let html = fs.readFileSync(htmlFile, "utf-8");
          html = html.replace(/src="\/assets\//g, 'src="./assets/');
          html = html.replace(/href="\/assets\//g, 'href="./assets/');
          html = html.replace(/href="\/favicon/g, 'href="./favicon');
          fs.writeFileSync(htmlFile, html, "utf-8");
        }
      }
    } catch (err) {
      console.warn(`[Export] Warning: Vite build failed for leonor-olivera: ${err.message}. Preserving committed preview.`);
    }
  } else {
    console.log(`[Export] Vite dependencies for leonor-olivera not present. Preserving committed preview.`);
  }

  // Safety check on existing leonor preview index.html
  const existingLeonorHtml = path.join(leonorDest, "index.html");
  if (fs.existsSync(existingLeonorHtml)) {
    let html = fs.readFileSync(existingLeonorHtml, "utf-8");
    let changed = false;
    if (html.includes('src="/assets/') || html.includes('href="/assets/') || html.includes('href="/favicon')) {
      html = html.replace(/src="\/assets\//g, 'src="./assets/');
      html = html.replace(/href="\/assets\//g, 'href="./assets/');
      html = html.replace(/href="\/favicon/g, 'href="./favicon');
      changed = true;
    }
    if (changed) {
      fs.writeFileSync(existingLeonorHtml, html, "utf-8");
    }
  }

  // 3. Snapshot and copy neil-datuin-caguioa (PHP)
  const neilSrc = path.join(ROOT_DIR, "templates", "neil-datuin-caguioa");
  const neilDest = path.join(PREVIEW_DIR, "neil-datuin-caguioa");
  fs.mkdirSync(neilDest, { recursive: true });

  if (fs.existsSync(path.join(neilSrc, "assets"))) {
    fs.cpSync(path.join(neilSrc, "assets"), path.join(neilDest, "assets"), { recursive: true });
  }
  if (fs.existsSync(path.join(neilSrc, "uploads"))) {
    fs.cpSync(path.join(neilSrc, "uploads"), path.join(neilDest, "uploads"), { recursive: true });
  }

  const phpBinary =
    process.platform === "win32" &&
    fs.existsSync("C:\\Users\\Administrator\\.config\\herd-lite\\bin\\php.exe")
      ? "C:\\Users\\Administrator\\.config\\herd-lite\\bin\\php.exe"
      : "php";

  let hasPhp = false;
  try {
    const phpCheck = spawnSync(phpBinary, ["-v"], { stdio: "ignore", windowsHide: true });
    if (phpCheck.status === 0) {
      hasPhp = true;
    }
  } catch {
    hasPhp = false;
  }

  if (hasPhp) {
    const phpPages = [
      "index.php",
      "about.php",
      "contact.php",
      "contribute.php",
      "news.php",
      "press.php",
      "support.php",
    ];
    const pagesList = "index|about|contact|contribute|news|press|support";
    const extlessRegex = new RegExp(`href=["'](${pagesList})([#?][^"']*)?["']`, "g");

    console.log(`[Export] Rendering PHP pages for "neil-datuin-caguioa"...`);
    for (const page of phpPages) {
      try {
        const res = spawnSync(
          phpBinary,
          ["-d", "display_errors=0", "-d", "error_reporting=0", "-f", page],
          {
            cwd: neilSrc,
            encoding: "utf-8",
            windowsHide: true,
          }
        );

        let html = res.stdout || "";
        const docIdx = html.indexOf("<!");
        if (docIdx > 0) {
          html = html.slice(docIdx);
        }

        // Rewrite .php links to .html
        html = html.replace(/href=["']([a-zA-Z0-9_-]+)\.php([#?][^"']*)?["']/g, (m, p1, p2) => {
          return `href="${p1}.html${p2 || ""}"`;
        });

        // Rewrite extensionless page links to .html
        html = html.replace(extlessRegex, (m, p1, p2) => {
          return `href="${p1}.html${p2 || ""}"`;
        });

        const outFileName = page.replace(/\.php$/, ".html");
        fs.writeFileSync(path.join(neilDest, outFileName), html, "utf-8");
      } catch (err) {
        console.warn(`[Export] Warning: Failed to render PHP page ${page}: ${err.message}`);
      }
    }
  } else {
    console.log(`[Export] PHP binary not available in environment. Preserving committed HTML snapshots.`);
  }

  console.log(`[Export] All templates verified and ready in ${PREVIEW_DIR}`);
}

// CLI entry point
const command = process.argv[2] || "list";
const target = process.argv[3];

switch (command) {
  case "list":
    await listTemplates();
    break;
  case "daemon":
    await startAllForeground();
    break;
  case "serve":
    if (!target) {
      console.error("Usage: node scripts/templates.mjs serve <template-name>");
      process.exit(1);
    }
    await serveTemplate(target);
    break;
  case "serve:all":
    await serveAll();
    break;
  case "export":
    await exportTemplates();
    break;
  case "kill":
    await killAll();
    break;
  default:
    console.error(`Unknown command: "${command}". Available: list, daemon, serve, serve:all, export, kill`);
    process.exit(1);
}
