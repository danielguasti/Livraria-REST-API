import React, { useState } from 'react';
import Footer from "../../components/footer/index.js"
import styles from './index.module.css';
import Cabecalho from '@/components/cabecalho';

export default function PesquisaLivros() {
  const [pesquisa, setPesquisa] = useState('');

  const mudancaInput = (e) => {
    setPesquisa(e.target.value);
  };

  return (
    <div className={styles.wrapper}>

      <Cabecalho />

      <div className={styles.main}>
        <h1 className={styles.title}>Pesquisa</h1>
        <input
          type="text"
          placeholder="Digite sua pesquisa..."
          value={pesquisa}
          onChange={mudancaInput}
          className={styles.searchInput}
        />
      </div>

      <Footer />
    </div>
  );
};


