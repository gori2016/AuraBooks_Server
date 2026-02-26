const fs = require("fs")
function getTodosLivros(){
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    return livros
}

function getLivroPorId(id){
    const livros = Json.parse(fs.readfilesync(livros.json))

    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}



module.exports = {
    getTodosLivros, getLivroPorId
}