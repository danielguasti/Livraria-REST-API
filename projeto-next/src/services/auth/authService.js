import { HttpClient } from "@/infra/httpClient";
import { tokenService } from "./tokenService";

export const authService = {
    async login({email, senha}) {
        return HttpClient("http://localhost:8000/auth/login", {
            method: 'POST',
            body: {email, senha}
        })
        .then(async (respostaDoServidor) => {
            if(!respostaDoServidor.ok) {
                throw new Error('Usuário ou senha inválidos')
            }

            const body = respostaDoServidor.body;

            tokenService.save(body);
            
        })
    }, 
    async getSession(ctx = null) {
        const token = tokenService.get(ctx);
    
        return HttpClient("http://localhost:8000/livros", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then((response) => {
          if(!response.ok) throw new Error('Não autorizado');
    
          return response.body;
        });
      }
}