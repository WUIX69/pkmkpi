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
    let reqPath = decodeURIComponent(req.url.split("?")[0]);
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
    server.on("error", reject);
    server.listen(port, () => {
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
      shell: process.platform === "win32",
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
  if (process.platform === "win32") {
    const psCmd = `Start-Process -FilePath '${process.execPath}' -ArgumentList @('${scriptPath}', 'daemon') -WindowStyle Hidden`;
    spawnSync("powershell", ["-NoProfile", "-Command", psCmd], { stdio: "inherit" });
  } else {
    const child = spawn(process.execPath, [scriptPath, "daemon"], {
      cwd: ROOT_DIR,
      detached: true,
      stdio: "ignore",
    });
    child.unref();
  }

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
        spawn("taskkill", ["/F", "/T", "/PID", String(info.pid)], { stdio: "ignore" });
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
    spawnSync("powershell", ["-NoProfile", "-Command", psCmd], { stdio: "ignore" });
  }

  console.log("Template processes terminated cleanly.");
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
  case "kill":
    await killAll();
    break;
  default:
    console.error(`Unknown command: "${command}". Available: list, daemon, serve, serve:all, kill`);
    process.exit(1);
}


