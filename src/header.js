const hamburguer = document.querySelector(".hamburguer");
const usermenu = document.querySelector(".user-menu");
const usertitles = document.querySelector(".user-titles");

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  usermenu.classList.toggle('active');
  usertitles.classList.toggle('active');
});

const searchBar = document.querySelector("#search-bar-input")
const searchBarList = document.querySelector(".search-bar-products")
const searchBarProducts = document.querySelectorAll(".search-bar-product-title")
const searchBarProduct = document.querySelectorAll(".search-bar-product")

searchBar.addEventListener("input", (e) => {
  if (e.target.value != 0) {
    searchBarList.classList.add('active');
  } else {
    searchBarList.classList.remove('active');
  }

  for (let i = 0; i < searchBarProducts.length; i++) {
    if (e.target.value == searchBarProducts[i].textContent.substring(0, e.target.value.length)) {
      searchBarProduct[i].classList.add('active')
      console.log()
    } else {
      searchBarProduct[i].classList.remove('active')
    }
  }
})