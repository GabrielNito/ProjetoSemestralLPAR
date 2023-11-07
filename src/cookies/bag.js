for (let i = 0; i < sessionStorage.length; i++) {
    data = sessionStorage.getItem(Object.keys(sessionStorage)[i])
    console.log(data)
}