(function () {
  var STORAGE_KEY = "pkmkpi-theme";
  var root = document.documentElement;
  var btn = document.getElementById("btn-theme");
  if (!btn) return;

  var iconMoon = document.getElementById("theme-icon-moon");
  var iconSun = document.getElementById("theme-icon-sun");
  var label = document.getElementById("theme-label");

  function currentTheme() {
    return root.classList.contains("dark") ? "dark" : "light";
  }

  function reflectState() {
    var isDark = currentTheme() === "dark";
    btn.setAttribute("aria-pressed", String(isDark));
    if (iconMoon && iconSun) {
      iconMoon.classList.toggle("hidden", isDark);
      iconSun.classList.toggle("hidden", !isDark);
    }
    if (label) {
      label.textContent = isDark ? "Dark mode" : "Light mode";
    }
  }

  function setTheme(theme) {
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* private mode / storage disabled — theme just won't persist */
    }
    reflectState();
  }

  btn.addEventListener("click", function () {
    setTheme(currentTheme() === "dark" ? "light" : "dark");
  });

  reflectState();
})();