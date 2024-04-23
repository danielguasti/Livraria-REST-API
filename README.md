# Livraria-REST-API
## Etapas para executar o projeto:
* Abrir o projeto no vscode.
* Abrir o terminal e usar o comando npm install.
* abrir a pasta config, dentro dela abrir o arquivo dbConnect.js e colocar a string de conexão com banco de dados + o nome do banco de dados depois da barra EX: ("mongodb+srv://danielguasti:daniel123@bancoteste.lryglmh.mongodb.net/livraria?retryWrites=true&w=majority").
* Após usar o thunder cliente fazer uma requisição post para rota /usuarios e se cadastrar.
* com o x-acess-token, agora você pode fazer requisições que necessitam de authorização vá em headers, marcar authorization na esquerda e escrever "bearer x-acess-token".
* agora vc pode fazer as requisições que quiser.
