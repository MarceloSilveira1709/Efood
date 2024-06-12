
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Use 'react-router-dom'
import Footer from "../../components/Footer";
import HeaderCardapio from "../../components/HeaderCardapio";
import ProdutoListaCardapio from "../../components/ProdutoListaCardapio";

export type Cardapio = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

const Cardapios = () => {
  const { id } = useParams(); // Certifique-se de que está importando de 'react-router-dom'
  const [cardapio, setCardapio] = useState<Cardapio[]>([]);


  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("Dados recebidos da API:", data);
        setCardapio(data.cardapio || []);
      })
  }, [id]);

  return (
    <>
      <HeaderCardapio />
        <ProdutoListaCardapio foods={cardapio} />
      <Footer />
    </>
  );
}

export default Cardapios;



