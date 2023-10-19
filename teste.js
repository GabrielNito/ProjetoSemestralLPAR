var proj = {
    Name: "abc",
    Roll: 123
};

const FileSystem = require("fs")
FileSystem.writeFile('./src/bag-products.json', JSON.stringify(proj), (error) => {
    if (error) { throw error };
})
