function save_data(nome, email, endereco, cpf, senha) {
    document.cookie += `"nome": ${nome}`
    document.cookie += `"email": ${email}`
    document.cookie += `"endereco": ${endereco}`
    document.cookie += `"cpf": ${cpf}`
    document.cookie += `"senha": ${senha}`

    window.location.replace("http://localhost:5173/index.html")
    // return {
    //     "nome": nome,
    //     "email": email,
    //     "endereco": endereco,
    //     "cpf": cpf,
    //     "senha": senha
    // }
}

function get_data(callback) {
    const nome = document.querySelector(".nome").value
    const email = document.querySelector(".email").value
    const endereco = document.querySelector(".endereco").value
    const cpf = document.querySelector(".cpf").value
    const senha = document.querySelector(".senha").value

    callback(nome, email, endereco, cpf, senha)
}

const button = document.querySelector(".button")

button.addEventListener("click", event => {
    event.preventDefault()
    get_data(save_data)
})