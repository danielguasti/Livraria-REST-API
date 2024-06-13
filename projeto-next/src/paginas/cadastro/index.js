
import styles from './index.module.css';
import Cabecalho from '@/components/cabecalho';
import Footer from '@/components/footer';

export default function Cadastrar() {
  return (
    <div>
        <Cabecalho />
        <div className={styles.container}>

        <main className={styles.main}>
            <h1 className={styles.title}>Formulário de Cadastro</h1>

            <form className={styles.form}>
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

