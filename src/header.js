const hamburguer = document.querySelector(".hamburguer");
const navmenu = document.querySelector(".navbar_menu");
const usermenu = document.querySelector(".user_menu");
const usertitles = document.querySelector(".user-titles");

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navmenu.classList.toggle('active');
  usermenu.classList.toggle('active');
  usertitles.classList.toggle('active');
});
