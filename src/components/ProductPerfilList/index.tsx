import Food from "../../models/Food"
import ProductPerfil from "../ProductPerfil"

import { Container } from "../ProductsList/styles"
import { Lista,  } from "./styles"

export type Props = {
  title: string
  foods : Food []
}

const ProductsPerfilList = ({ foods }: Props) => (
  <Container>
    <Lista>
      {foods.map(food => (
        <ProductPerfil
        key={food.id}
        description={food.description}
        image={food.image}
        infos={food.infos}
        title={food.title}/>
      ))}
    </Lista>
  </Container>
)

export default ProductsPerfilList
