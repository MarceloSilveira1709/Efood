import headerImg from '../../assets/images/fundo.png';
import headerImgMassa from '../../assets/images/fundo_massa.png';
import { Carrinho, Container, ContainerMassa, ImagemFundo, ImagemMassa, Logo, RestauranteLink, Tipo, Titulo } from './styles';
import logo from '../../assets/images/logo.svg';
import { open } from '../../store/reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';

import type { Restaurante } from '../../pages/Restaurantes';

export type Props = {
  restaurante: Restaurante;
};

const HeaderCardapio: React.FC<Props> = ({ restaurante }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <>
      <ImagemFundo style={{ backgroundImage: `url(${headerImg})` }}>
        <Container>
          <RestauranteLink to="/">Restaurantes</RestauranteLink>
          <Logo src={logo} alt="Efood" />
          <Carrinho onClick={openCart}>{items.length} - produto(s) no carrinho</Carrinho>
        </Container>
      </ImagemFundo>

      <ImagemMassa style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <ContainerMassa>
          <Tipo>{restaurante.tipo}</Tipo>
          <Titulo>{restaurante.titulo}</Titulo>
        </ContainerMassa>
      </ImagemMassa>
    </>
  );
};

export default HeaderCardapio;



