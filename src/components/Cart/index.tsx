import { Botao } from "../ProdutoCardapio/styles"

import { CartContainer, InfoProduto, Overlay, Prato, Preco, Produto, Sidebar, Total } from "./styles"
import pizza from '../../assets/images/pizza.png'

const Cart = () => (
  <CartContainer>
    <Overlay />
      <Sidebar>
        <ul>
          <li>
        <Produto>
          <img src={pizza}  />
          <InfoProduto>
            <Prato>Nome prato</Prato>
            <Preco>R$ 60,90</Preco>
            <button type="button"/>
          </InfoProduto>
        </Produto>
        <Produto>
          <img src={pizza}  />
          <InfoProduto>
            <Prato>Nome prato</Prato>
            <Preco>R$ 60,90</Preco>
            <button type="button"/>
          </InfoProduto>
        </Produto>
            <Total>Valor total R$ 182.50</Total>
            <Botao > Continuar para a entrega</Botao>
          </li>
        </ul>
      </Sidebar>
    </CartContainer>

)

export default Cart
