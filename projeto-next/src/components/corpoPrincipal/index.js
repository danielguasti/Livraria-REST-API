
import styles from './index.module.css'; 

export default function CorpoPrincipal() {
  return (
    <div className={styles.container}>

      <div className={styles.main}>
        <h1 className={styles.title}>Bem-vindo à VYM Livros</h1>
        
        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.subtitle}>
              A VYM Livros é sua porta de entrada para um mundo de conhecimento e aventura literária. 
              Seja você um leitor ávido ou apenas começando sua jornada de leitura, temos algo para todos os gostos.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.textContainer}>
            <p className={styles.subtitle}>
              A VYM Livros é mais do que apenas uma livraria online. Somos uma comunidade de amantes de livros 
              que se dedicam a compartilhar o poder transformador da leitura. Junte-se a nós e explore o mundo 
              ilimitado da literatura!
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
