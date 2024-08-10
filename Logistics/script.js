let burgerMenuBtn = document.querySelector(".burger-menu-icon");
let burgerMenu = document.querySelector(".burger-menu");

burgerMenuBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  if (burgerMenu.classList.contains("active")) {
    burgerMenu.style.transform = "translateX(0)";
  }
  else {
    burgerMenu.style.transform = "translateX(-100%)";
  };
  burgerMenu.style.transition = "0.4s";
})
