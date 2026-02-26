 
 //modulo fs é responsável por ler, criar, atualizar, deletar e escrever arquivos, ele é nativo do node, ou seja, não precisa ser instalado
 const fs = require("fs")
const { get } = require("http")


 // essa parte do código faz parte do controlador do livro é aqui que estão as funções que vão ser executadas quando as rotas forem acessadas no app.js
 function getLivros (req, res){
    try {
        // aqui é onde a função getTodosLivros é chamada, ela lê o arquivo livros.json e retorna os dados para a rota do livro.js
        const livros = getTodosLivros()
        res.send(livros)

    //tratamento de erro
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
 }

 module.exports = {
    getLivros
 }
    