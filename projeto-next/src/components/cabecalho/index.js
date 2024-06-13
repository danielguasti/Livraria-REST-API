import Image from "next/image"
import Logo from "../../img/logo.png"
import styles from "./index.module.css"
import Link from "next/link"

export default function Cabecalho() {
    return(
        <div className={styles.corpoCabecalho}>
            <Link className={styles} href="/">
                <Image 
                    src={Logo}
                    height={80}
                    width={80}
                    alt="Logo"
                />
            </Link>
            

            <ul className={styles.ul}>
                <Link className={styles.li} href="listagemLivros">Livros</Link>

                <Link className={styles.li} href="login">Login</Link>
                
                <Link className={styles.li} href="cadastro">Cadastre-se</Link>
            </ul>
        </div>
    )
}