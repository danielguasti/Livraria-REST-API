
import Footer from "../../components/footer/index.js"
import styles from './index.module.css';
import Cabecalho from '@/components/cabecalho';
import BuscaLivros from '@/components/buscaLivros/index.js';

export default function PesquisaLivros() {

  return (
    <div className={styles.wrapper}>

      <Cabecalho />

      <BuscaLivros />

      <Footer />
    </div>
  );
};





