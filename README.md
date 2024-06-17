# Trabalho 2 de Programação avançada WEB
## Alunos: Vladimir Gama Batista, Yan Zumerle Rangel e Marcos Daniel Guasti Machado.
## Livraria-REST-API
### Etapas para executar o projeto BACK-END:
* Abrir o projeto no vscode.
* Abrir o arquivo Projeto
* Abrir o terminal e usar o comando npm install.
* abrir a pasta config, dentro dela abrir o arquivo dbConnect.js e colocar a string de conexão com banco de dados + o nome do banco de dados depois da barra EX: ("mongodb+srv://danielguasti:daniel123@web-avancada.rstle2x.mongodb.net/livraria?retryWrites=true&w=majority&appName=WEB-AVANCADA") na URL, esta incluido o usuario "danielguasti" e a senha que tem alterar e incluir a sua propria senha que no caso é "daniel123" e apos a barra tem que ser adicionada a URL completa.
* Rodar o comando no terminal: npm run dev
* Deixar o comando rodando para o front conseguir buscar as informações na api

### Etapas para executar o projeto FRONT-END (NEXT.JS):
* Abrir o arquivo projeto-next
* Abrir o terminal e usar o comando npm install
* Rodas o comando no terminal: npm run dev
* Abrir o Localhost:3000

### Navegando pela página web
#### Nós fizemos uma livraria online, onde os usuários podem visualizar livros e informações importantes sobre os livros como preço, numero de páginas, editora, entre outras informações.

*Ao entrar na página a aba livros não fica disponível, apenas quando é feito o Login. Por isso quando clicado na página livros você é direcionado diretamente pra página de Login.
*O login será feito com o email e senha, baseado no cadastro ja realizado pelo usuario.
*Na aba de livros temos os livros do banco com os dados de cada um.
