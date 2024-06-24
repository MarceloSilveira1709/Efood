
import { useState } from "react";
import { Lista } from "./styles";
import { Container } from "../ProductListRestaurant/styles";
import { Cardapio } from "../../pages/Menus";
import ProdutoCardapio from "../ProductMenu";
import ModalProduto from "../ModalProduct";

export type Props = {
  foods: Cardapio[];
  title: string
};

const ProductListMenu = ({ foods }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Cardapio | null>(null);

  const getFoodTags = (food: Cardapio) => {
    const tags = [''];
    return tags;
  };

  return (
    <>
      <Container>
        <Lista>
          {foods.map((food) => (
            <ProdutoCardapio
              key={food.id}
              descricao={food.descricao}
              foto={food.foto}
              infos={getFoodTags(food)}
              nome={food.nome}
              porcao={food.porcao}
              setModalEstaAberto={setModalEstaAberto}
              setProdutoSelecionado={setProdutoSelecionado} // Definindo o produto selecionado quando o cardápio é clicado
              id={food.id}
              preco={food.preco}
            />
          ))}
        </Lista>
      </Container>
      {modalEstaAberto && produtoSelecionado && (
        <ModalProduto
          modalEstaAberto={modalEstaAberto}
          setModalEstaAberto={setModalEstaAberto}
          cardapio={produtoSelecionado} // Passando o cardápio selecionado como propriedade
        />
      )}
    </>
  );
};

export default ProductListMenu;


