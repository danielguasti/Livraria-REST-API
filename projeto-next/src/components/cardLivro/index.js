import Image from "next/image";
import FotoLivro from "../../img/FotoLivro.jpg"
import styles from "./index.module.css"


export default function CardLivro(props) {
    return(
        <div className={styles.card}>
            <Image src={FotoLivro} width={100} height={100} alt={props.title} className={styles.image} />
            <div className={styles.details}>
              <h2  className={styles.title}>{props.titulo}</h2>
              <p  className={styles.info}>Número de Páginas: {props.numeroPaginas}</p>
              <p  className={styles.info}>Preço: R$ {props.preco}</p>
              <p  className={styles.info}>Editora: {props.editora}</p>
            </div>
          </div> 
    )
}