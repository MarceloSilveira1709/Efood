import Food from "../../models/Food"
import Product from "../Product"
import { Container , List } from "./styles"

export type Props = {
  title: string
  foods : Food []
}

const ProductsList = ({ foods }: Props) => (
  <Container>
    <List>
      {foods.map(food => (
        <Product
        key={food.id}
        description={food.description}
        image={food.image}
        infos={food.infos}
        title={food.title}/>
      ))}

    </List>
  </Container>
)

export default ProductsList
