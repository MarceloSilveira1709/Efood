import React, { useState } from 'react';
import { CardContainer, Overlay, Sidebar, FormRow, InputGroup } from './styles';
import { Botao } from '../ModalProduto/styles';

interface CheckoutProps {
  setDelivery: (value: boolean) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ setDelivery }) => {
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [isDeliveryVisible, setIsDeliveryVisible] = useState(true);

  const formAddressIsValid = () => {
    setIsPaymentVisible(true);
    setIsDeliveryVisible(false);
  };

  const confirmPayment = () => {
    console.log('Pagamento confirmado!');
  };

  const handleBackToDelivery = () => {
    setIsPaymentVisible(false);
    setIsDeliveryVisible(true);
  };

  return (
    <CardContainer>
      <Overlay />
      <Sidebar>
        {isDeliveryVisible && (
          <>
            <h2>Entrega</h2>
            <InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input id="receiver" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input id="address" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input id="city" type="text" />
            </InputGroup>
            <FormRow>
              <InputGroup maxWidth="155px">
                <label htmlFor="cep">Cep</label>
                <input id="cep" type="text" />
              </InputGroup>
              <InputGroup maxWidth="155px">
                <label htmlFor="number">Número</label>
                <input id="number" type="text" />
              </InputGroup>
            </FormRow>
            <InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input id="complement" type="text" />
            </InputGroup>
            <Botao onClick={formAddressIsValid}>Continuar com pagamento</Botao>
            <Botao onClick={() => setDelivery(false)}>Voltar para o carrinho</Botao>
          </>
        )}
        {isPaymentVisible && (
          <>
            <h2>Pagamento - Valor a pagar de R$ 190,90</h2>
            <InputGroup >
              <label htmlFor="cardDisplayName">Nome no cartão</label>
              <input id="cardDisplayName" type="text" />
            </InputGroup>
            <FormRow>
              <InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input id="cardNumber" type="text" />
              </InputGroup>
              <InputGroup maxWidth="100px">
                <label htmlFor="cardCode">CVV</label>
                <input id="cardCode" type="text" />
              </InputGroup>
            </FormRow>
            <FormRow>
              <InputGroup maxWidth="155px">
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input id="expiresMonth" type="text" />
              </InputGroup>
              <InputGroup maxWidth="155px">
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input id="expiresYear" type="text" />
              </InputGroup>
            </FormRow>
            <Botao onClick={confirmPayment}>Finalizar pagamento</Botao>
            <Botao onClick={handleBackToDelivery}>Voltar para a edição de endereço</Botao>
          </>
        )}
      </Sidebar>
    </CardContainer>
  );
};

export default Checkout;






