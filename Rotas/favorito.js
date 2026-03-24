const {Router} = require("express")
const { getFavoritos, postLivroFavorito, apagarLivroFavorito } = require("../Controladores/favorito")
const router = Router()

router.get("/", getFavoritos)

router.post("/:id", postLivroFavorito)

router.delete("/:id", apagarLivroFavorito)

module.exports = router