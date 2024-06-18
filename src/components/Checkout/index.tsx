import React from 'react';
import { CardContainer, FormItem, Overlay, Sidebar, FormRow } from './styles';
import { Botao } from '../ModalProduto/styles';

const Card = () => (
  <CardContainer>
    <Overlay />
    <Sidebar>
      <h2>Entrega</h2>
      <ul>
        <FormItem>
          <label htmlFor="receiver">Quem irá receber</label>
          <input id="receiver" type="text" />
        </FormItem>
        <FormItem>
          <label htmlFor="address">Endereço</label>
          <input id="address" type="text" />
        </FormItem>
        <FormItem>
          <label htmlFor="city">Cidade</label>
          <input id="city" type="text" />
        </FormItem>
        <FormRow>
          <FormItem>
            <label htmlFor="cep">Cep</label>
            <input id="cep" type="text" />
          </FormItem>
          <FormItem>
            <label htmlFor="number">Número</label>
            <input id="number" type="text" />
          </FormItem>
        </FormRow>
        <FormItem>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input id="complement" type="text" />
        </FormItem>
        <Botao>Continuar com pagamento</Botao>
        <Botao> Voltar para o carrinho</Botao>
      </ul>
    </Sidebar>
  </CardContainer>
);

export default Card;

