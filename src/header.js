const hamburguer = document.querySelector(".hamburguer");
const navmenu = document.querySelector(".navbar_menu");
const usermenu = document.querySelector(".user-menu");
const usertitles = document.querySelector(".user-titles");

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  usermenu.classList.toggle('active');
});
