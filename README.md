# Trabalho 2 de Programação avançada WEB
## Alunos: Vladimir Gama Batista, Yan Zumerle Rangel e Marcos Daniel Guasti Machado.
## Livraria-REST-API
### Etapas para executar o projeto:
* Abrir o projeto no vscode.
* Abrir o terminal e usar o comando npm install.
* abrir a pasta config, dentro dela abrir o arquivo dbConnect.js e colocar a string de conexão com banco de dados + o nome do banco de dados depois da barra EX: ("mongodb+srv://danielguasti:daniel123@bancoteste.lryglmh.mongodb.net/livraria?retryWrites=true&w=majority") na URL, esta incluido o usuario "danielguasti" e a senha que tem alterar e incluir a sua propria senha que no caso é "daniel123" e apos a barra tem que ser adicionada a URL completa.
* Após usar o thunder cliente fazer uma requisição post para rota /usuarios e se cadastrar, fazer uma rota para usuario se cadastrar a requisiçao deve ter usario e senha no corpo.
* com o x-acess-token, agora você pode fazer requisições que necessitam de authorização vá em headers, marcar authorization na esquerda e escrever "bearer x-acess-token".
* agora vc pode fazer as requisições que quiser.
