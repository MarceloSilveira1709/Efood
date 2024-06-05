
import { Restaurante } from "../../pages/Restaurantes"
import Produto from "../ProdutoRestaurante"
import { Container , List } from "./styles"

export type Props = {
  title: string
  foods : Restaurante []
}

const ProdutosListaRestaurante = ({ foods }: Props) =>  {
  const getFoodTags = ( food: Restaurante) => {
    const tags = ['']

    return tags
  }

  return(
    <Container>
    <List>
      {foods.map(food => (
        <Produto
          key={food.id}
          description={food.descricao}
          image={food.capa}
          infos={getFoodTags(food)}
          name={food.titulo}
          id={food.id}
          destacado={food.destacado}
          tipo={food.tipo}
          nota={food.avaliacao}/>
      ))}
    </List>
  </Container>
  )

}



export default ProdutosListaRestaurante
