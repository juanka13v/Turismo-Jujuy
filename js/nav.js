export function menuDespegable(nav) {
  const $nav = document.querySelector(".nav");

  window.addEventListener("scroll", (e) => {
    $nav.classList.toggle("active-nav", window.scrollY > 0);
  });
}
