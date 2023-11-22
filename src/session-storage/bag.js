function products_bag() {
    contador = 0
    function data_info_container(title, price) {
        let a = document.createElement("a")
        let h2 = document.createElement("h2")
        let parentTag = document.getElementsByClassName("info-container")
        a.innerHTML = title
        h2.innerHTML = price
        parentTag[contador].appendChild(a)
        parentTag[contador].appendChild(h2)
        contador++
    }
    function data_product_container(title, price, path) {
        let img = document.createElement("img")
        let button = document.createElement("button")
        let div = document.createElement("div")
        let parentTag = document.getElementsByClassName("product-container")

        img.setAttribute("src", path)

        button.classList.add("remove")
        button.innerText = "Remove"
        div.classList.add("info-container");
        parentTag[contador].appendChild(img);
        parentTag[contador].appendChild(div);
        parentTag[contador].appendChild(button);
        data_info_container(title, price)
    }
    function create_product_container(title, price, path) {
        let section = document.getElementsByClassName("products")
        let div = document.createElement("div")
        div.classList.add("product-container")
        section[0].appendChild(div)
        data_product_container(title, price, path)
    }
    for (let i = 0; i < sessionStorage.length; i++) {
        data = JSON.parse(sessionStorage.getItem(Object.keys(sessionStorage)[i]))
        nome = data.nome
        preco = data.preco.split("$")[1]
        create_product_container(nome, preco, `/img/${nome}.jpg`)
        console.log(nome);
    }
}
function update_price_bag() {
    subtotal_text = document.querySelector(".subtotal_text")
    total_text = document.querySelector(".total_text")
    subtotal_price = document.querySelector(".subtotal_price")
    total_price = document.querySelector(".total_price")
    shipping = document.querySelector(".shipping")
    let price = 0
    for (let i = 0; i < sessionStorage.length; i++) {
        data = JSON.parse(sessionStorage.getItem(Object.keys(sessionStorage)[i]))
        preco = parseFloat(data.preco.replace(",", ".").split("$")[1])
        price += preco
    }
    final_price = price + 20
    subtotal_text.innerHTML = "Subtotal"
    total_text.innerHTML = "Total"
    subtotal_price.innerHTML = price
    total_price.innerHTML = final_price
}
function delete_item_from_bag(callback) {
    const remove = document.querySelectorAll(".remove")
    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', () => {
            try {
                product = remove[i].parentNode;
                product.remove()
                title = remove[i].previousElementSibling.childNodes[0].textContent
                console.log(title);
                sessionStorage.removeItem(title)
                location.reload()
            } catch (e) {
                console.log(e);
            }
            callback()
        })
    }
}
function bag_prices(callback) {
    const order = document.getElementsByClassName("order")
    const h1_1 = document.createElement("h1")
    h1_1.classList.add("subtotal_text")
    const h1_2 = document.createElement("h1")
    h1_2.classList.add("total_text")
    const h2_1 = document.createElement("h2")
    h2_1.classList.add("subtotal_price")
    const h2_2 = document.createElement("h2")
    h2_2.classList.add("total_price")
    const hr = document.createElement("hr")
    const h3 = document.createElement("h3")
    h3.classList.add("shipping")
    const button = document.createElement("button")
    button.innerText = "Comprar"
    order[0].appendChild(h1_1)
    order[0].appendChild(h2_1)
    order[0].appendChild(hr)
    order[0].appendChild(hr)
    order[0].appendChild(h3)
    order[0].appendChild(hr)
    order[0].appendChild(h1_2)
    order[0].appendChild(h2_2)
    order[0].appendChild(button)

    button.addEventListener("click", () => {
        // console.log(sessionStorage.length);
        if (sessionStorage.length > 0) {
            alert("Compra efetuada com sucesso")
            window.location.replace("http://localhost:5173/index.html")
        } else {
            alert("Por favor adicione itens a sacola.")
        }
    })
    callback()
}

function empty_bag() {
    console.log(sessionStorage.length);
    const parent = document.querySelector(".products")
    if (sessionStorage.length == 0) {
        const h6 = document.createElement("h6")
        h6.innerText = "Nenhum item na sacola"
        parent.appendChild(h6)
    } else {
        return
    }
}
document.addEventListener("DOMContentLoaded", () => {
    empty_bag()
    products_bag()
    bag_prices(update_price_bag)
    delete_item_from_bag(update_price_bag)
})