import { Link } from 'react-router-dom';
import estrela from '../../assets/images/estrela.svg'
import  { Card, Descricao, Titulo, Infos, Tag, Nota, Estrela, ImgFood, Detalhes, Avaliacao } from './styles'

type Props = {
  id: number;
  image: string;
  name: string;
  infos: string [];
  description: string;
  destacado: boolean;
  tipo: string;
  nota: number;
}

const ProdutoRestaurante= ( {id, image, name, description, destacado,  tipo , nota ,
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
    return  descricao.slice(0, 170) + '...'
    }
    return descricao
  }

return (
  <Card>
    <ImgFood src={image} alt={name} />
    <Infos>
    <Tag>{destacado}</Tag>
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
    <Tag>
      <Link to="/cardapios">Saiba mais</Link>
    </Tag>
  </Card>
)
}
export default ProdutoRestaurante
