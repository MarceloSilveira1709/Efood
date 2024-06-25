import { Link } from 'react-router-dom';

import estrela from '../../assets/images/estrela.svg'

import  * as S from './styles'

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

const ProductRestaurant = ( {id, name, description, destacado,  tipo , nota , capa
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
    return  descricao.slice(0, 170) + '...'
    }
    return descricao
  }

return (
  <S.Card>
    <S.ImageCard src={capa} alt={name} />
    <S.Infos>
    {destacado ? <S.Tag>Destaque da semana</S.Tag> : ''}
    <S.Tag>{tipo}</S.Tag>
    </S.Infos>
    <S.Details>
      <div>
    <S.Title>{name}</S.Title>
    <S.Assessment>
      <S.Note>{nota}</S.Note>
      <S.Star src={estrela}></S.Star>
    </S.Assessment>
    </div>
    <S.Description>
      {getDescricao(description)}
    </S.Description>
    <Link to={`/cardapios/${id}`}>
      <S.Button title={`Clique aqui para ver o menu do restaurante ${name}`}>Saiba mais</S.Button>
    </Link>
    </S.Details>

  </S.Card>
)
}
export default ProductRestaurant
