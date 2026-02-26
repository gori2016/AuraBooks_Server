const fs = require("fs")
function getTodosLivros(){
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    return livros
}

module.exports = {
    getTodosLivros
}