var body = document.body,
    themeToggle = document.querySelectorAll(".theme-mode-toggle");
    themeMode = localStorage.getItem('themeMode');

    if (themeMode == 'dark') {
      body.classList.remove("light");
      body.classList.add("dark");
    }
    if (themeMode == 'light') {
      body.classList.add("light");
      body.classList.remove("dark");
    }

// Toggle Dark Mode
// If you don't need user toggleable dark mode, there's really no need to include JS.
[].forEach.call(themeToggle, function(el) {
  el.addEventListener("click", function(e) {
    e.preventDefault();
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem('themeMode', 'dark');
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
      localStorage.setItem('themeMode', 'light');
    }
  }, false);
});
