import { HttpClient } from "@/infra/httpClient";

export const buscaService = {
    async Busca() {
        return HttpClient("http://localhost:8000/livros", {
            method: 'GET',
        })
        .then(async (respostaDoServidor) => {
            if(!respostaDoServidor.ok) {
                throw new Error('Usuário ou senha inválidos')
            }

            const body = respostaDoServidor.body;
            
        })
    }
}