//importa o express, cria o servidor
const express = require("express")
const cors = require("cors")
//Importa o arquivo aonde foi criado as rotas do livro. aqui está sendo exportado o router 
const rotaLivro = require("./Rotas/livro.js")
const rotaFavoritos = require("./Rotas/favorito.js")


//cria a aplicação
const app = express()
//define a porta
const port = 8000

//isso significa sempre que alguém acessar algo que comece com /livros, use as rotas do arquivo livro.js
app.use(express.json()) // isso é necessário para que o express consiga ler o corpo da requisição, sem isso o req.body vai ser undefined
app.use(cors({origin:"*"}))
app.use('/livros', rotaLivro)
app.use("/favoritos", rotaFavoritos )

app.listen(port,() =>{
    console.log(`escutando a porta ${port}`)
})