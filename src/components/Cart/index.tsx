import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';

import { close, remove } from '../../store/reducers/cart';

import Card from '../Card';
import * as S from './styles';
import { getTotalPrice } from '../Utils';

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  const [isCardOpen, setIsCardOpen] = useState(false);

  const closeCart = () => {
    dispatch(close());
  };


  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar className={items.length === 0 ? 'empty' : ''}>
          {items.length === 0 ? (
            <p>Carrinho vazio</p>
          ) : (
            <>
              {items.map((item) => (
                <S.Product key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <S.InfoProduct>
                    <S.Dish>{item.nome}</S.Dish>
                    <S.Price>R$ {item.preco}</S.Price>
                    <button onClick={() => removeItem(item.id)} type="button">
                    </button>
                  </S.InfoProduct>
                </S.Product>
              ))}
              <S.Totals>
                <p>Valor total </p>R$ {getTotalPrice(items)}
              </S.Totals>
              <S.Button onClick={() => setIsCardOpen(true)}>Continuar para a entrega</S.Button>
            </>
          )}
        </S.Sidebar>
      </S.CartContainer>
      {isCardOpen && <Card setDelivery={setIsCardOpen} />}
    </>
  );
};

export default Cart;

