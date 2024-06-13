import styles from "./index.module.css"

export default function InformacoesEsquerda(props) {
    return(
        <div className={styles.quadrado}>
            <h1 className={styles.texto}>
                {props.texto}
            </h1>
        </div>
    )
}   