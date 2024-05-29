import { useState } from 'react';
import  { Card, Descricao, Titulo, Infos, Botao } from './styles'


type Props = {
  title: string;
  infos: string [];
  description: string;
  image: string;

}

const ProductPerfil = ( {title, description, infos, image, }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  return(
    <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>
      {description}
    </Descricao>
    <Botao  onClick={() => setModalEstaAberto(true) }>Adicionar ao Carrinho</Botao>
  </Card>
  )
}

export default ProductPerfil
