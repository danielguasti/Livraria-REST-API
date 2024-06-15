import { HttpClient } from "@/infra/httpClient";

export const CadastroUsuarioService= {
    async Cadastro() {
        return HttpClient("http://localhost:8000/usuarios", {
            method: 'POST',
        })
        .then(async (respostaDoServidor) => {
            if(!respostaDoServidor.ok) {
                throw new Error('Usuário ou senha inválidos')
            }

            const body = respostaDoServidor.body;
            
        })
    }
}