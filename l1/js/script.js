const menuBtn = document.querySelector(".menu__button");
const modalBurgerMenu = document.querySelector(".modal__burger_menu");
const closeBtn = document.querySelector(".close__button");
const burgerItems = document.querySelectorAll(".burger__li");

menuBtn.addEventListener("click", () => {
   modalBurgerMenu.classList.toggle("active");
   menuBtn.classList.toggle("active");
});

window.addEventListener('click', (e) => {
   if (!modalBurgerMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      modalBurgerMenu.classList.remove('active');
      menuBtn.classList.remove('active');
   }
});

closeBtn.addEventListener('click', () => {
   modalBurgerMenu.classList.remove('active');
   menuBtn.classList.remove('active');
});

burgerItems.forEach(item => {
   item.addEventListener('click', () => {
      burgerItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
   });
});