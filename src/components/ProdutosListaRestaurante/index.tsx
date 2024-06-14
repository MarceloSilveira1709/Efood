
import { Restaurante } from "../../pages/Restaurantes";
import Produto from "../ProdutoRestaurante";
import { Container, List } from "./styles";

export type Props = {
  title: string;
  foods?: Restaurante[]; // Permitindo que foods seja opcional
};

const ProdutosListaRestaurante = ({ foods, title }: Props) => {
  if (!foods) {
    return <p>Carregando...</p>; // Exemplo de mensagem de carregamento para quando foods for undefined
  }

  const getFoodTags = (food: Restaurante) => {
    const tags = [''];
    return tags;
  };

  return (
    <Container>
      <h2>{title}</h2>
      <List>
        {foods.map((food) => (
          <Produto
            key={food.id}
            description={food.descricao}
            image={food.image}
            infos={getFoodTags(food)}
            name={food.titulo}
            id={food.id}
            destacado={food.destacado}
            tipo={food.tipo}
            nota={food.avaliacao}
            capa={food.capa}
          />
        ))}
      </List>
    </Container>
  );
};

export default ProdutosListaRestaurante;

