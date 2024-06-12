import { Link } from 'react-router-dom';
import estrela from '../../assets/images/estrela.svg'
import  { Card, Descricao, Titulo, Infos, Tag, Nota, Estrela, ImgFood, Detalhes, Avaliacao, Botao, } from './styles'

type Props = {
  id: number;
  image: string;
  name: string;
  infos: string [];
  description: string;
  destacado: boolean;
  tipo: string;
  nota: number;
  capa: string;
}

const ProdutoRestaurante= ( {id, image, name, description, destacado,  tipo , nota , capa
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
    return  descricao.slice(0, 170) + '...'
    }
    return descricao
  }

return (
  <Card>
    <ImgFood src={capa} alt={name} />
    <Infos>
    {destacado ? <Tag>Destaque da semana</Tag> : ''}
    <Tag>{tipo}</Tag>
    </Infos>
    <Detalhes>
    <Titulo>{name}</Titulo>
    <Avaliacao>
      <Nota>{nota}</Nota>
      <Estrela src={estrela}></Estrela>
    </Avaliacao>
    </Detalhes>

    <Descricao>
      {getDescricao(description)}
    </Descricao>
    <Link to={`/cardapios/${id}`}>
      <Botao>Saiba mais</Botao>
    </Link>

  </Card>
)
}
export default ProdutoRestaurante
