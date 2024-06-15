
import { useState } from 'react';
import styles from './index.module.css';
import Cabecalho from '@/components/cabecalho';
import Footer from '@/components/footer';
import { useRouter } from 'next/router';
import { HttpClient } from "@/infra/httpClient";

export default function Cadastrar() {
    const router = useRouter();
    const [errors, setErrors] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const nome = form.name.value;
        const email = form.email.value;
        const senha = form.password.value;
        let valid = true;

        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors('Por favor, insira um email válido.')
            valid = false;
            
        }

        alert(errors);


        if (valid) {
            const res = HttpClient('http://localhost:8000/usuarios', {
                method: 'POST', 
                body: { nome, email, senha}
              })
              .then( (respostaDoServidor) => {
                alert('Usuário cadastrado com sucesso')

                console.log(respostaDoServidor)

                router.push('/')
              }
                
              
                
              );
        }
    }; 


  return (
    <div>
        <Cabecalho />
        <div className={styles.container}>

        <main className={styles.main}>
            <h1 className={styles.title}>Formulário de Cadastro</h1>

            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="nome" className={styles.label}>
                    Nome Completo
                </label>
                <input type="text" id="name" name="name" className={styles.input} />

                <label htmlFor="email" className={styles.label}>
                    Email
                </label>
                <input type="text" id="email" name="email" className={styles.input} />

                <label htmlFor="password" className={styles.label}>
                    Senha
                </label>
                <input type="password" id="password" name="password" className={styles.input} />

                <button type="submit" className={styles.button}>
                    Cadastrar-se
                </button>
            </form>
        </main>
        </div>

        <Footer />
    </div>
  );
};

