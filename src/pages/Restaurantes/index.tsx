import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import ProdutosLista from "../../components/ProdutosListaRestaurante";

export type Restaurante = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
}

const Restaurantes = () => {
  const [restaurante, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then((res) => setRestaurantes(res))
  })

  return (
    <>
  <Header/>
  <ProdutosLista  foods={restaurante} title="Restaurantes"/>
  <Footer />
  </>
  )
}



export default Restaurantes
