// Password visibility toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("togglePassword");
  const passwordField = document.getElementById("password");

  if (toggle && passwordField) {
    toggle.addEventListener("click", () => {
      const isPassword = passwordField.type === "password";
      passwordField.type = isPassword ? "text" : "password";
      toggle.textContent = isPassword ? "Hide" : "Show";
    });
  }

  // Login logic
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const phone = document.getElementById("phone").value.trim();
      const pass = document.getElementById("password").value.trim();
      const error = document.getElementById("errorMsg");

      if (phone === "123456" && pass === "7890") {
        window.location.href = "new.html";
      } else {
        error.textContent = "Invalid credentials. Try again.";
      }
    });
  }

  // Optional: Like button animation
  const likeButtons = document.querySelectorAll(".like-btn");
  likeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.style.color = btn.style.color === "red" ? "" : "red";
    });
  });
});

