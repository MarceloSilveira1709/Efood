import { useState } from "react";

import ModalProduct from "../ModalProduct";
import ProductMenu from "../ProductMenu";

import { List } from "./styles";
import { Container } from "../ProductListRestaurant/styles";

export type Props = {
  foods: Menu[];
  title: string
};

const ProductListMenu = ({ foods }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Menu | null>(null);

  const getFoodTags = (food: Menu) => {
    const tags = [''];
    return tags;
  };

  return (
    <>
      <Container>
        <List>
          {foods.map((food) => (
            <ProductMenu
              key={food.id}
              descricao={food.descricao}
              foto={food.foto}
              infos={getFoodTags(food)}
              nome={food.nome}
              porcao={food.porcao}
              setModalIsOpen={setModalIsOpen}
              setSelectedProduct={setSelectedProduct} // Definindo o produto selecionado quando o cardápio é clicado
              id={food.id}
              preco={food.preco}
            />
          ))}
        </List>
      </Container>
      {modalIsOpen && selectedProduct && (
        <ModalProduct
        modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          cardapio={selectedProduct} // Passando o cardápio selecionado como propriedade
        />
      )}
    </>
  );
};

export default ProductListMenu;


