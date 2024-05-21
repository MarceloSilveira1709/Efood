import  { Card, Descricao, Titulo, Infos, Botao } from './styles'


type Props = {
  title: string;
  infos: string [];
  description: string;
  image: string;

}

const ProductPerfil = ( {title, description, infos, image, }: Props) => (
    <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>
      {description}
    </Descricao>
    <Botao>Adicionar ao Carrinho</Botao>
  </Card>

)
export default ProductPerfil
