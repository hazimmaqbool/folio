const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const backLink = document.querySelector(".back");
const surpriseLink = document.querySelector(".surprise");
const surpriseUrls = [
  "https://patatap.com/",
  "https://thisissand.com/",
  "https://zoomquilt.org/",
  "https://weavesilk.com/",
  "https://sandspiel.club/",
  "https://stars.chromeexperiments.com/",
  "https://shaderpark.com/",
  "https://www.autodraw.com/",
  "https://jspaint.app/",
];

backLink.addEventListener("click", (event) => {
  event.preventDefault();

  if (window.history.length > 1) {
    window.history.back();
    return;
  }

  window.location.assign(backLink.href);
});

surpriseLink.addEventListener("click", (event) => {
  event.preventDefault();

  const randomUrl = surpriseUrls[Math.floor(Math.random() * surpriseUrls.length)];
  window.open(randomUrl, "_blank", "noopener,noreferrer");
});

themeToggle.addEventListener("click", () => {
  const isDark = root.dataset.theme !== "dark";

  root.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode",
  );
  themeColor.setAttribute("content", isDark ? "#0d0d0d" : "#fffaeb");
});
