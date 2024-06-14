// components/MessageList.js
import { tokenService } from '@/services/auth/tokenService';
import { useEffect, useState } from 'react';
import styles from "./index.module.css"
import CardLivro from '../cardLivro';

const accessToken = tokenService.get();

export default function BuscaLivros() {
  const [livros, setLivros] = useState([]);

  async function handleChanges() {
    const fetchLivros = async () => {
        const res = await fetch('http://localhost:8000/livros', {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          });
      const data = await res.json();
      setLivros(data);
    };

    fetchLivros();
  };

  useEffect(() => {
    handleChanges();
  }, [])

  return (
    <div className={styles.listaLivros}>
        {livros.map(livro => (    
            <CardLivro key={livro.id} titulo={livro.titulo} editora={livro.editora} preco={livro.preco} numeroPaginas={livro.numeroPaginas}  />
        ))}
    </div>
  );
}