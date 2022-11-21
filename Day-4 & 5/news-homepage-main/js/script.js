let bar = document.querySelector(".bar");
let navlinks = document.querySelector(".nav-links");
let close = document.querySelector(".close");

bar.addEventListener("click", () => {
  navlinks.classList.add("open");
  close.classList.add("open");
});

close.addEventListener("click", () => {
  navlinks.classList.remove("open");
  close.classList.remove("open");
});
