
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "../../components/Footer";
import HeaderMenu from "../../components/HeaderMenu";
import ProductListMenu from "../../components/ProductListMenu";

const Menus = () => {
  const { id } = useParams<{ id: string }>();
  const [cardapio, setCardapio] = useState<Menu[]>([]);
  const [restaurante, setRestaurante] = useState<Restaurant | null>(null);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("Dados recebidos da API:", data);
        const mapRestaurant: Restaurant = {
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
        setRestaurante(mapRestaurant);
      });
  }, [id]);

  if (!restaurante) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <HeaderMenu restaurante={restaurante} />
      <ProductListMenu foods={cardapio} title="Cardápio" />
      <Footer />
    </>
  );
}

export default Menus;





