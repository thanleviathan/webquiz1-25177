// Highlight current nav link and show a greeting on the homepage
document.querySelectorAll("nav a").forEach((a) => {
  if (a.href === location.href || a.href === location.href + "index.html")
    a.classList.add("active");
});
const g = document.getElementById("greeting");
if (g) {
  const h = new Date().getHours();
  g.textContent =
    h < 12 ? "Good morning!" : h < 18 ? "Good afternoon!" : "Good evening!";
}
document.getElementById("year").textContent = new Date().getFullYear();
