import * as Yup from 'yup';
import { useFormik } from 'formik';
import { usePurchaseMutation } from '../../services/api';
import React, { useState } from 'react';

import * as S from './styles';
import { Button } from './styles';


interface CheckoutProps {
  setDelivery: (value: boolean) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ setDelivery }) => {
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [isDeliveryVisible, setIsDeliveryVisible] = useState(true);

  const [purchase, { isLoading, isError, data, isSuccess }] = usePurchaseMutation();

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
        isPaymentVisible ? schema.required('O campo é obrigatório') : schema),
      cardNumber: Yup.string().when((values, schema) =>
        isPaymentVisible ? schema.required('O campo é obrigatório') : schema),
      cardCode: Yup.string().when((values, schema) =>
        isPaymentVisible ? schema.required('O campo é obrigatório') : schema),
      expiresMonth: Yup.string().when((values, schema) =>
        isPaymentVisible ? schema.required('O campo é obrigatório') : schema),
      expiresYear: Yup.string().when((values, schema) =>
        isPaymentVisible ? schema.required('O campo é obrigatório') : schema),
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
            price: 10
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
    <S.CardContainer>
      <S.Overlay />
      <S.Sidebar>
        {isSuccess ? (
          <div className='Realizado'>
            <h3>Pedido realizado - 'ORDER id'</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button onClick={() => setDelivery(false)}>Concluir</Button>
          </div>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {isDeliveryVisible && (
              <>
                <h2>Entrega</h2>
                <S.InputGroup>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input id="receiver" type="text" name='receiver' value={form.values.receiver} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('receiver', form.errors.receiver)}</small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input id="address" type="text" name='address' value={form.values.address} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('address', form.errors.address)}</small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input id="city" type="text" name='city' value={form.values.city} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('city', form.errors.city)}</small>
                </S.InputGroup>
                <S.FormRow>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="cep">Cep</label>
                    <input id="cep" type="text" name='cep' value={form.values.cep} onChange={form.handleChange} onBlur={form.handleBlur} />
                    <small>{getErrorMessage('cep', form.errors.cep)}</small>
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="number">Número</label>
                    <input id="number" type="text" name='number' value={form.values.number} onChange={form.handleChange} onBlur={form.handleBlur} />
                    <small>{getErrorMessage('number', form.errors.number)}</small>
                  </S.InputGroup>
                </S.FormRow>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input id="complement" type="text" name='complement' value={form.values.complement} onChange={form.handleChange} onBlur={form.handleBlur} />
                </S.InputGroup>
                <Button onClick={formAddressIsValid}>Continuar com pagamento</Button>
                <Button onClick={() => setDelivery(false)}>Voltar para o carrinho</Button>
              </>
            )}
            {isPaymentVisible && (
              <>
                <h2>Pagamento - Valor a pagar de R$ 190,90</h2>
                <S.InputGroup >
                  <label htmlFor="cardDisplayName">Nome no cartão</label>
                  <input id="cardDisplayName" type="text" name='cardDisplayName' value={form.values.cardDisplayName} onChange={form.handleChange} onBlur={form.handleBlur} />
                  <small>{getErrorMessage('cardDisplayName', form.errors.cardDisplayName)}</small>
                </S.InputGroup>
                <S.FormRow>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input id="cardNumber" type="text" name='cardNumber' value={form.values.cardNumber} onChange={form.handleChange} onBlur={form.handleBlur} />
                    <small>{getErrorMessage('cardNumber', form.errors.cardNumber)}</small>
                  </S.InputGroup>
                  <S.InputGroup maxWidth="100px">
                    <label htmlFor="cardCode">CVV</label>
                    <input id="cardCode" type="text" name='cardCode' value={form.values.cardCode} onChange={form.handleChange} onBlur={form.handleBlur} />
                    <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
                  </S.InputGroup>
                </S.FormRow>
                <S.FormRow>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input id="expiresMonth" type="text" name='expiresMonth' value={form.values.expiresMonth} onChange={form.handleChange} onBlur={form.handleBlur} />
                    <small>{getErrorMessage('expiresMonth', form.errors.expiresMonth)}</small>
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input id="expiresYear" type="text" name='expiresYear' value={form.values.expiresYear} onChange={form.handleChange} onBlur={form.handleBlur} />
                    <small>{getErrorMessage('expiresYear', form.errors.expiresYear)}</small>
                  </S.InputGroup>
                </S.FormRow>
                <Button type="submit">Finalizar pagamento</Button>
                <Button onClick={handleBackToDelivery}>Voltar para a edição de endereço</Button>
              </>
            )}
          </form>
        )}
      </S.Sidebar>
    </S.CardContainer>
  );
};

export default Checkout;







