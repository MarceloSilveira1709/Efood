
import React, { useState } from 'react';
import {  Botao,  CartContainer,  InfoProduto,  Overlay,  Prato,  Preco,  Produto,  Sidebar,  Total,} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { close, remove } from '../../store/reducers/cart';
import Card from '../Card';

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  const [isCardOpen, setIsCardOpen] = useState(false);

  const closeCart = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco);
    }, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <Sidebar>
          {items.map((item) => (
            <Produto key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <InfoProduto>
                <Prato>{item.nome}</Prato>
                <Preco>R$ {item.preco}</Preco>
                <button onClick={() => removeItem(item.id)} type="button">
                </button>
              </InfoProduto>
            </Produto>
          ))}
          <Total>
            <p>Valor total </p>R$ {getTotalPrice()}
          </Total>
          <Botao onClick={() => setIsCardOpen(true)}>Continuar para a entrega</Botao>
        </Sidebar>
      </CartContainer>
      {isCardOpen && <Card setDelivery={setIsCardOpen} />}
    </>
  );
};

export default Cart;


