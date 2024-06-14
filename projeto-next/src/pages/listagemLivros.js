import PesquisaLivros from "@/paginas/pesquisaLivros";
import { withSession } from "@/services/auth/session.js";

export const getServerSideProps = withSession((ctx) => {
    return {
      props: {
        session: ctx.req.session || {},
      }
    }
  })

export default function ListagemLivros() {
    return(
        <PesquisaLivros />
    )
}

