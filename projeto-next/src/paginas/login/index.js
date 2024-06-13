
import styles from './index.module.css';
import Cabecalho from '@/components/cabecalho';
import Footer from '@/components/footer';

export default function PaginaLogin() {
  return (
    <div>
        <Cabecalho />
        <div className={styles.container}>

        <div className={styles.main}>
            <h1 className={styles.title}>Formulário de Login</h1>

            <form className={styles.form}>
            <label htmlFor="email" className={styles.label}>
                Email
            </label>
            <input type="text" id="email" name="email" className={styles.input} />

            <label htmlFor="password" className={styles.label}>
                Senha
            </label>
            <input type="password" id="password" name="password" className={styles.input} />

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