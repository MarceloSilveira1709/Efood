import { useState } from "react"



import { Lista,  } from "./styles"
import Effects from "../Effects"
import { Restaurante } from "../../pages/Restaurantes"
import { Container } from "../ProdutosListaRestaurante/styles"
import ProductCardapio from "../ProdutoCardapio"
import { Cardapio } from "../../pages/Cardapios"

export type Props = {
  title: string
  foods : Cardapio [ ]
}

const ProdutosListaCardapio = ({ foods }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const getFoodTags = (food: Cardapio) => {
    const tags = ['']

    return tags
  }

  return(
  <>
  <Container>
    <Lista>
      {foods.map(food => (
        <ProductCardapio
        key={food.id}
        descricao={food.descricao}
        foto={food.foto}
        infos={getFoodTags(food)}
        nome={food.nome}
        porcao={food.porcao}
        setModalEstaAberto={setModalEstaAberto}
        />
      ))}
    </Lista>
  </Container>
  {modalEstaAberto && (
    <Effects
    modalEstaAberto={modalEstaAberto}
    setModalEstaAberto={setModalEstaAberto}
    />
  )}
  </>
  )
}

export default ProdutosListaCardapio
