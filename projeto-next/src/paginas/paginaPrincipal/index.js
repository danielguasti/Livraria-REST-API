import Cabecalho from "@/components/cabecalho"
import Carrrossel from "@/components/carrossel"
import CorpoPrincipal from "@/components/corpoPrincipal"
import styles from "./index.module.css"
import Footer from "@/components/footer"

export default function PaginaPrincipal() {
    return(
        <div className={styles.corpo}>
            <Cabecalho />
            <Carrrossel />
            <CorpoPrincipal />
            <Footer />
        </div>
    )
}