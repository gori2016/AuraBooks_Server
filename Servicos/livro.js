const fs = require("fs")
function getTodosLivros() {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    return livros
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}


function insereLivro(novoLivro) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaLivros = [...livros, novoLivro]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}


module.exports = {
    getTodosLivros, getLivroPorId, insereLivro
}