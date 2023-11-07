const search = document.querySelector('#search-input')
const titles = document.getElementsByClassName('title')

search.addEventListener('input', (event) => {
    const results = document.querySelector('.search-results')

    if (search.value.length > 0) {
        results.style.display = "flex"
    }

    for (let i = 0; i < titles.length; i++) {
        let titlesLower = titles[i].textContent.toLowerCase()

        if (titlesLower.includes(search.value.toLowerCase())) {
            titles[i].parentElement.parentElement.style.display = "flex"
        } else {
            titles[i].parentElement.parentElement.style.display = "none"
        }
    }
})

const resultProducts = document.querySelectorAll('.result-product')

for (let i = 0; i < resultProducts.length; i++) {
    resultProducts[i].addEventListener('mouseover', (event) => {
        resultProducts[i].style.background = 'rgba(144, 238, 144, 0.3)'
    })
    resultProducts[i].addEventListener('mouseleave', (event) => {
        resultProducts[i].style.background = 'transparent'
    })
    resultProducts[i].addEventListener('click', (event) => {
        window.location.href = `/template/product-${i + 1}.html`
    })
}