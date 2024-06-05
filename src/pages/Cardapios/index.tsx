
import Footer from "../../components/Footer";
import HeaderCardapio from "../../components/HeaderCardapio";
import ProdutosListaCardapio from "../../components/ProdutoListaCardapio";
import { useEffect, useState } from "react";

export type Cardapio = {
  foto: string,
  preco: number,
  id: number,
  nome: string,
  descricao: string,
  porcao: string,
}


const Cardapios = () => {
  const [cardapio, setCardapios] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then((res) => setCardapios(res))
  })

  return (
    <>
    <HeaderCardapio/>
    <ProdutosListaCardapio  foods={cardapio} title="Cardapios"/>
    <Footer />
    </>
  )
}



export default Cardapios
