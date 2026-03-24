const fs = require("fs")

function getTodosFavoritos() {
    const livros = JSON.parse(fs.readFileSync('favoritos.json'))
    return livros
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse(fs.readFileSync('favoritos.json'))
    const livrosFiltrados = livros.filter((livro) => livro.id !== id
    )
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

function inserirLivroFavorito(id){
    const livros = JSON.parse(fs.readFileSync('livros.json')) 
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))

    const livroInserido = livros.find(livro => livro.id === id)
        if (!livroInserido) { // 👈 proteção
        throw new Error(`Livro com id ${id} não encontrado`)
    }

    const novaListadeLivrosFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListadeLivrosFavoritos))
    
}


module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    inserirLivroFavorito
}