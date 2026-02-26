const {getTodosLivros, getLivroPorId} = require("../Servicos/livro")


 // essa parte do código faz parte do controlador do livro é aqui que estão as funções que vão ser executadas quando as rotas forem acessadas no app.js
 function getLivros (req, res){
    try {
        // aqui é onde a função getTodosLivros é chamada, ela lê o arquivo livros.json e retorna os dados para a rota do livro.js
        const livros = getTodosLivros()
        res.send(livros)

    //tratamento de erros
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
 }


 function getLivro(req, res){
    try {
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)

    //tratamento de erros
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
 }




 module.exports = {
    getLivros,  getLivro
 }
    