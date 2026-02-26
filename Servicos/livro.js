const fs = require("fs")

function getTodosLivros(req,res){
    JSON.parse(fs.readFileSync('livros.json'))
}

module.exports = {
    getTodosLivros
}