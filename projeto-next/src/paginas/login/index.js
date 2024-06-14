import React from "react";
import { useRouter } from "next/router";
import styles from './index.module.css';
import Cabecalho from '@/components/cabecalho';
import Footer from '@/components/footer';
import { authService } from "@/services/auth/authService";

export default function PaginaLogin() {
    const router = useRouter();
    const [valores, setValores] = React.useState({
        email: "",
        senha: "",
    })

    function mudarFormulario(event) {
        const campoValor = event.target.value;
        const campoNome = event.target.name;

        setValores((valoresAtuais) => {
            return{
                ...valoresAtuais,
                [campoNome]: campoValor,
            };
        })

    }




  return (
    <div>
        <Cabecalho />
        <div className={styles.container}>

        <div className={styles.main}>
            <h1 className={styles.title}>Formulário de Login</h1>

            <form className={styles.form} onSubmit={(event) => {
                event.preventDefault();
                authService
                    .login({
                        email: valores.email,
                        senha: valores.senha,
                    })
                    .then(() => {
                        router.push('/')
                    })
                    .catch((err) => {
                        console.log(err);
                        alert('Usuário ou Senha estão inválidos')
                    })
            }}>
            <label htmlFor="email" className={styles.label}>
                Email
            </label>
            <input type="text" id="email" name="email" value={valores.email} onChange={mudarFormulario} className={styles.input} />

            <label htmlFor="password" className={styles.label}>
                Senha
            </label>
            <input type="password" id="senha" name="senha" value={valores.senha} onChange={mudarFormulario} className={styles.input} />

            <button type="submit" className={styles.button}>
                Entrar
            </button>
            </form>
        </div>
        </div>

        <Footer />
    </div>
  );
}