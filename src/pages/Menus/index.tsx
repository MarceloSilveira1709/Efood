
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import HeaderCardapio from "../../components/HeaderMenu";
import ProdutoListaCardapio from "../../components/ProductListMenu";
import Card from "../../components/Card";

export type Cardapio = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export type Restaurante = {
  id: number;
  titulo: string;
  tipo: string;
  capa: string;
  descricao: string;
  avaliacao: number;
  destacado: boolean;
  image: string;
}

const Cardapios = () => {
  const { id } = useParams<{ id: string }>();
  const [cardapio, setCardapio] = useState<Cardapio[]>([]);
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("Dados recebidos da API:", data);
        const mapaRestaurante: Restaurante = {
          id: data.id,
          titulo: data.titulo,
          tipo: data.tipo,
          capa: data.capa,
          descricao: data.descricao,
          avaliacao: data.avaliacao,
          destacado: data.destacado,
          image: data.image
        };
        setCardapio(data.cardapio || []);
        setRestaurante(mapaRestaurante);
      });
  }, [id]);

  if (!restaurante) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <HeaderCardapio restaurante={restaurante} />
      <ProdutoListaCardapio foods={cardapio} title="Cardápio" />
      <Footer />
    </>
  );
}

export default Cardapios;





