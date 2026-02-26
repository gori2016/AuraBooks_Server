//importa o express, cria o servidor
const express = require("express")

//Importa o arquivo aonde foi criado as rotas do livro. aqui está sendo exportado o router 
const rotaLivro = require("./Rotas/livro.js")

//cria a aplicação
const app = express()
//define a porta
const port = 8000

//isso significa sempre que alguém acessar algo que comece com /livros, use as rotas do arquivo livro.js
app.use('/livros', rotaLivro)

app.listen(port,() =>{
    console.log(`escutando a porta ${port}`)
})