import { open } from '../../store/reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';

import headerImg from '../../assets/images/fundo.png';
import logo from '../../assets/images/logo.svg';

import * as S from './styles';

export type Props = {
  restaurante: Restaurant;
};

const HeaderMenu: React.FC<Props> = ({ restaurante }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <>
      <S.ImageBackground style={{ backgroundImage: `url(${headerImg})` }}>
        <S.Container>
          <S.RestaurantLink to="/">Restaurantes</S.RestaurantLink>
          <S.Logo src={logo} alt="Efood" />
          <S.CartShopping role='button' onClick={openCart}>{items.length} - produto(s) no carrinho</S.CartShopping>
        </S.Container>
      </S.ImageBackground>

      <S.CoverImage style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <S.CoverRules>
          <S.Type>{restaurante.tipo}</S.Type>
          <S.Title>{restaurante.titulo}</S.Title>
        </S.CoverRules>
      </S.CoverImage>
    </>
  );
};

export default HeaderMenu;



