const fs = require("fs")

const productButton = document.getElementsByClassName("add-to-cart")
const product = document.querySelector("#nome-produto")
// const description = document.querySelector(".")
const price = document.querySelector("#preco")

fetch('/src/bag-products.json').then((res) => {
    res.json().then((data) => {

        productButton[0].addEventListener("click", () => {

            const produto = {
                product: {
                    "quantity": 1,
                    "price": price
                }
            }

            fs.writeFile(data, JSON.stringify(produto), (error) => {
                if (error) { throw error }
            })
        })
    })
})
// https://www.youtube.com/watch?v=EJDCvW1AsIw