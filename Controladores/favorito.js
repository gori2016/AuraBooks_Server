const {getTodosFavoritos, inserirLivroFavorito, deletaFavoritoPorId} = require("../Servicos/favorito")

function getFavoritos(req, res) {
    try {

        const livros = getTodosFavoritos()
        res.send(livros)


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


function postLivroFavorito(req, res) {
    try {
        const id = Number(req.params.id) // 👈 converte para número como no delete
        inserirLivroFavorito(id)         // 👈 usa a função importada corretamente
        res.status(201)
        res.send("Livro inserido com sucesso")

    } catch (error) {
        console.log("ERRO:", error.message)
        res.status(500)
        res.send(error.message)
    }
}


function apagarLivroFavorito(req, res) {
    try {
        const id = Number(req.params.id)
        if (id && Number(id)) {
            const body = req.body
            deletaFavoritoPorId(id, body)
            res.send("Favorito Deletado com Sucesso")
        } else {
            res.status(422)
            res.send("Id inválido, por favor insira um id válido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postLivroFavorito,
    apagarLivroFavorito

}