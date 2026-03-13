const { Router } = require("express")
const {getLivros, getLivro, postLivro, patchLivro, apagarLivro} = require("../Controladores/livro")
const router = Router()





// router.get é o metodo HTTP, o '/' é a rota e o res.send é a função que executa algo
router.get('/', getLivros)


router.get('/:id', getLivro)

//exemplo de uma requisição POST simples
router.post('/', postLivro)
//exemplo de uma requisição Patch simples
router.patch('/:id', patchLivro)
//exemplo de uma requisição Delete simples
router.delete('/:id', apagarLivro)



module.exports = router