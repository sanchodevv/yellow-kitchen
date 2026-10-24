window.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("burger");
  const menu = document.getElementById("menu");

  openBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    openBtn.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  });

  menu.addEventListener("click", (e) => {
    if (e.target === menu) {
      menu.classList.remove("active");
    }
  });
});
