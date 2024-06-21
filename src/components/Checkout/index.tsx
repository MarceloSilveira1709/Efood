import React, { useState } from 'react';
import { CardContainer, Overlay, Sidebar, FormRow, InputGroup } from './styles';
import { Botao } from '../ModalProduto/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePurchaseMutation } from '../../services/api';

interface CheckoutProps {
  setDelivery: (value: boolean) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ setDelivery }) => {
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [isDeliveryVisible, setIsDeliveryVisible] = useState(true);

  const [purchase, {isLoading, isError, data}] = usePurchaseMutation()

  const formAddressIsValid = () => {
    setIsPaymentVisible(true);
    setIsDeliveryVisible(false);
  };

  const handleBackToDelivery = () => {
    setIsPaymentVisible(false);
    setIsDeliveryVisible(true);
  };

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'Preencha os dados corretamente')
        .required('Campo obrigatório'),
      address: Yup.string()
        .min(4, 'Preencha os dados corretamente')
        .required('Campo obrigatório'),
      city: Yup.string()
        .min(4, 'Preencha os dados corretamente')
        .required('Campo obrigatório'),
      cep: Yup.string()
        .min(8, 'Preencha os dados corretamente')
        .required('Campo obrigatório'),
      number: Yup.string()
        .min(1, 'Preencha os dados corretamente')
        .required('Campo obrigatório'),


      cardDisplayName: Yup.string().when((values, schema) =>
        isPaymentVisible ? schema.required('o campo é obrigatório') : schema),
      cardNumber: Yup.string().when((values, schema) =>
      isPaymentVisible ? schema.required('o campo é obrigatório') : schema),
      cardCode: Yup.string().when((values, schema) =>
      isPaymentVisible ? schema.required('o campo é obrigatório') : schema),
      expiresMonth: Yup.string().when((values, schema) =>
      isPaymentVisible ? schema.required('o campo é obrigatório') : schema),
      expiresYear: Yup.string().when((values, schema) =>
      isPaymentVisible ? schema.required('o campo é obrigatório') : schema),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: values.address,
          city: values.city,
          cep: Number(values.cep),
          number: Number(values.number),
          complement: values.complement
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            expires: {
              month: 1,
              year: 2023
            },
            code: Number(values.cardCode)
          }
        },
        products: [
          {
            id: 1,
            price:10
          }
        ]
      });

    },
  });

  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched;
    const estaInvalido = fieldName in form.errors;

    if (estaAlterado && estaInvalido) return message;
    return '';
  };

  return (
    <CardContainer>
      <Overlay />
      <Sidebar>
        <form onSubmit={form.handleSubmit}>
          {isDeliveryVisible && (
            <>
              <h2>Entrega</h2>
              <InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input id="receiver" type="text" name='receiver' value={form.values.receiver} onChange={form.handleChange} onBlur={form.handleBlur} />
                <small>{getErrorMessage('receiver', form.errors.receiver)}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="address">Endereço</label>
                <input id="address" type="text" name='address' value={form.values.address} onChange={form.handleChange} onBlur={form.handleBlur} />
                <small>{getErrorMessage('address', form.errors.address)}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="city">Cidade</label>
                <input id="city" type="text" name='city' value={form.values.city} onChange={form.handleChange} onBlur={form.handleBlur} />
                <small>{getErrorMessage('city', form.errors.city)}</small>
              </InputGroup>
              <FormRow>
                <InputGroup maxWidth="155px">
                  <label htmlFor="cep">Cep</label>
                  <input id="cep" type="text" name='cep' value={form.values.cep} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('cep', form.errors.cep)}</small>
                </InputGroup>
                <InputGroup maxWidth="155px">
                  <label htmlFor="number">Número</label>
                  <input id="number" type="text" name='number' value={form.values.number} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('number', form.errors.number)}</small>
                </InputGroup>
              </FormRow>
              <InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input id="complement" type="text" name='complement' value={form.values.complement} onChange={form.handleChange} onBlur={form.handleBlur} />
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
                <input id="cardDisplayName" type="text" name='cardDisplayName' value={form.values.cardDisplayName} onChange={form.handleChange} onBlur={form.handleBlur} />
                <small>{getErrorMessage('cardDisplayName', form.errors.cardDisplayName)}</small>
              </InputGroup>
              <FormRow>
                <InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input id="cardNumber" type="text" name='cardNumber' value={form.values.cardNumber} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('cardNumber', form.errors.cardNumber)}</small>
                </InputGroup>
                <InputGroup maxWidth="100px">
                  <label htmlFor="cardCode">CVV</label>
                  <input id="cardCode" type="text" name='cardCode' value={form.values.cardCode} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
                </InputGroup>
              </FormRow>
              <FormRow>
                <InputGroup maxWidth="155px">
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <input id="expiresMonth" type="text" name='expiresMonth' value={form.values.expiresMonth} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('expiresMonth', form.errors.expiresMonth)}</small>
                </InputGroup>
                <InputGroup maxWidth="155px">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input id="expiresYear" type="text" name='expiresYear' value={form.values.expiresYear} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('expiresYear', form.errors.expiresYear)}</small>
                </InputGroup>
              </FormRow>
              <Botao type="submit">Finalizar pagamento</Botao>
              <Botao onClick={handleBackToDelivery}>Voltar para a edição de endereço</Botao>
            </>
          )}
        </form>
      </Sidebar>
    </CardContainer>
  );
};

export default Checkout;







