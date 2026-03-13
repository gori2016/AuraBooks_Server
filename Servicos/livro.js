const fs = require("fs")

//FUNÇÃO GET PARA VER TODOS OS LIVROS
function getTodosLivros() {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    return livros
}
// FUNÇÃO GET PARA FILTAR LIVRO POR ID
function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}

// FUNÇÃO POST PARA INSERIR NOVO LIVRO
function insereLivro(novoLivro) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaLivros = [...livros, novoLivro]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

// FUNÇÃO PATCH PARA MODIFICAR LIVRO EXISTENTE
function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indifceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoMudado = {...livrosAtuais[indifceModificado], ...modificacoes}
    livrosAtuais[indifceModificado] = conteudoMudado
     fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}


//função delete para deletar um livro por id Você não consegue deletar porque sua função deleteLivro não remove o livro do array nem salva novamente no arquivo. Ela só

function deleteLivro(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    let deletado = livros.filter(livro => livro.id !==id)
    fs.writeFileSync("livros.json", JSON.stringify(deletado))
    
}


module.exports = {
    getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deleteLivro
}