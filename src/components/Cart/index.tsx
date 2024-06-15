import { Botao } from "../ProdutoCardapio/styles"

import { CartContainer, InfoProduto, Overlay, Prato, Preco, Produto, Sidebar, Total } from "./styles"
import pizza from '../../assets/images/pizza.png'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import {close, remove} from '../../store/reducers/cart'

const Cart = () => {
const {isOpen, items} = useSelector((state: RootReducer) => state.cart)

const dispatch = useDispatch ()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
  return items.reduce((acumulador, valoratual) => {
      return (acumulador += valoratual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
  <CartContainer className={isOpen ? 'is-open' : ''}>
    <Overlay  onClick={closeCart}/>
      <Sidebar>
        <ul>
          {items.map((item) => (
        <Produto key={item.id}>
          <img src={item.foto}  alt={item.nome}/>
          <InfoProduto>
            <Prato>{item.nome}</Prato>
            <Preco>{item.preco}</Preco>
            <button onClick={() => removeItem(item.id)} type="button"/>
          </InfoProduto>
        </Produto>
          ))}
            <Total>Valor total R$ {getTotalPrice()}</Total>
            <Botao > Continuar para a entrega</Botao>

        </ul>
      </Sidebar>
    </CartContainer>

)
}

export default Cart
