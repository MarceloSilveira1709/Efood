import React from 'react';

import Produto from '../ProductRestaurant';
import { Restaurant } from '../../pages/Restaurants';

import { Container, List } from './styles';

export type Props = {
  foods?: Restaurant[]; // Permitindo que foods seja opcional
};

const ProductListRestaurant: React.FC<Props> = ({ foods }) => {
  if (!foods) {
    return <p>Carregando...</p>; // Exemplo de mensagem de carregamento para quando foods for undefined
  }

  const getFoodTags = (food: Restaurant) => {
    const tags = ['']; // Lógica para obter as tags de comida
    return tags;
  };

  return (
    <Container>
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

export default ProductListRestaurant;

