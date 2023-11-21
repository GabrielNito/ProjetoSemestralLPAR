function saveProduct() {
    const nome = document.getElementById("name-product").textContent
    const preco = document.getElementById("price").textContent
    console.log(preco);
    data = {
        "nome": nome,
        "preco": preco
    }
    sessionStorage.setItem(nome, JSON.stringify(data))
}
const button = document.getElementById("add-to-cart")
button.addEventListener('click', () => {
    saveProduct()
})