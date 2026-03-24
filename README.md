AuraBooks Server ⚙️📚O AuraBooks Server é a API REST que sustenta a plataforma AuraBooks. Desenvolvido com o ecossistema Node.js, ele gerencia a persistência de dados, a lógica de autenticação e o fornecimento de informações para o front-end em React.🚀 TecnologiasEste projeto utiliza as seguintes tecnologias:Node.js - Ambiente de execução JavaScript server-side.Express - Framework web rápido e minimalista.CORS - Habilitação de requisições de diferentes origens (essencial para o Front-end).Dotenv - Gerenciamento de variáveis de ambiente.Nodemon - Atualização automática do servidor em desenvolvimento.📦 Instalação e Uso1. Clonar o repositórioBashgit clone https://github.com/gori2016/AuraBooks_Server.git
cd AuraBooks_Server
2. Instalar dependênciasBashnpm install
3. Configurar variáveis de ambienteCrie um arquivo .env na raiz do projeto e preencha as informações necessárias (exemplo):Snippet de códigoPORT=3001
DB_URL=sua_conexao_com_banco
JWT_SECRET=sua_chave_secreta
4. Executar o servidorPara ambiente de desenvolvimento (com auto-reload):Bashnpm run dev
Para ambiente de produção:Bashnpm start
🛣️ Estrutura de Rotas (Sugestão)MétodoRotaDescriçãoGET/booksRetorna a lista de todos os livros.GET/books/:idRetorna detalhes de um livro específico.POST/users/loginAutentica o usuário e retorna um token.POST/users/registerCria uma nova conta de usuário.📁 Organização do ProjetoPlaintext├── src
│   ├── controllers/  # Lógica das rotas
│   ├── models/       # Definição de dados e schemas
│   ├── routes/       # Definição dos endpoints
│   ├── config/       # Configurações (Banco, etc)
│   └── index.js      # Ponto de entrada (App Express)
├── .env.example      # Exemplo de variáveis de ambiente
└── package.json      # Dependências e scripts
💻 Integração com o Front-endEste servidor foi criado para alimentar o AuraBooks_FrontEnd. Certifique-se de que o servidor esteja rodando antes de iniciar a interface React.🤝 ContribuindoFaça um Fork do projeto.Crie uma Branch para sua modificação (git checkout -b feature/nova-rota).Dê um Commit nas alterações (git commit -m 'Add: nova rota de busca').Faça um Push (git push origin feature/nova-rota).Abra um Pull Request.Desenvolvido com ☕ por gori2016
