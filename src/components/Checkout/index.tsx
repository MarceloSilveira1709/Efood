import * as Yup from 'yup';
import { useFormik } from 'formik';
import { usePurchaseMutation } from '../../services/api';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import { Button } from './styles';

import { RootReducer } from '../../store';
import { getTotalPrice, parseToBrl } from '../Utils';

interface CheckoutProps {
  setDelivery: (value: boolean) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ setDelivery }) => {
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [isDeliveryVisible, setIsDeliveryVisible] = useState(true);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  const [purchase, { data, isSuccess }] = usePurchaseMutation();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const navigate = useNavigate();

  const formAddressIsValid = async () => {
    const isValid = await form.validateForm();
    if (!Object.keys(isValid).length) {
      setIsPaymentVisible(true);
      setIsDeliveryVisible(false);
    }
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
      cardDisplayName: Yup.string().when(() =>
        isPaymentVisible ? Yup.string().required('O campo é obrigatório') : Yup.string()
      ),
      cardNumber: Yup.string().when(() =>
        isPaymentVisible ? Yup.string().required('O campo é obrigatório') : Yup.string()
      ),
      cardCode: Yup.string().when(() =>
        isPaymentVisible ? Yup.string().required('O campo é obrigatório') : Yup.string()
      ),
      expiresMonth: Yup.string().when(() =>
        isPaymentVisible ? Yup.string().required('O campo é obrigatório') : Yup.string()
      ),
      expiresYear: Yup.string().when(() =>
        isPaymentVisible ? Yup.string().required('O campo é obrigatório') : Yup.string()
      ),
    }),
    onSubmit: async (values) => {
      await purchase({
        delivery: {
          receiver: values.receiver,
          address: values.address,
          city: values.city,
          cep: Number(values.cep),
          number: Number(values.number),
          complement: values.complement,
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
            code: Number(values.cardCode),
          },
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number,
        })),
      });
      setIsOrderCompleted(true);
    },
  });

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  const handleCompleteOrder = () => {
    setDelivery(false);
    navigate('/');
  };

  return (
    <S.CardContainer>
      <S.Overlay />
      <S.Sidebar>
        {isOrderCompleted && isSuccess && data ? (
          <div className="Realizado">
            <h3>Pedido realizado - {data?.orderId}</h3>
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
            <Button onClick={handleCompleteOrder}>Concluir</Button>
          </div>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {isDeliveryVisible && (
              <>
                <h2>Entrega</h2>
                <S.InputGroup>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    id="receiver"
                    type="text"
                    name="receiver"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('receiver') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.FormRow>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="cep">Cep</label>
                    <InputMask
                      id="cep"
                      type="text"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cep') ? 'error' : ''}
                      mask="99999-999"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="number">Número</label>
                    <input
                      id="number"
                      type="text"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('number') ? 'error' : ''}
                    />
                  </S.InputGroup>
                </S.FormRow>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    id="complement"
                    type="text"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.InputGroup>
                <Button
                  type="button"
                  title="Clique aqui para continuar com o pagamento"
                  onClick={formAddressIsValid}
                >
                  Continuar com pagamento
                </Button>
                <Button
                  type="button"
                  title="Clique aqui para retornar ao carrinho"
                  onClick={() => setDelivery(false)}
                >
                  Voltar para o carrinho
                </Button>
              </>
            )}
            {isPaymentVisible && (
              <>
                <h2>Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}{' '}</h2>
                <S.InputGroup>
                  <label htmlFor="cardDisplayName">Nome no cartão</label>
                  <input
                    id="cardDisplayName"
                    type="text"
                    name="cardDisplayName"
                    value={form.values.cardDisplayName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardDisplayName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.FormRow>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardNumber') ? 'error' : ''}
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="100px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                  </S.InputGroup>
                </S.FormRow>
                <S.FormRow>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      id="expiresMonth"
                      type="text"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('expiresMonth') ? 'error' : ''}
                      mask="99"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      id="expiresYear"
                      type="text"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('expiresYear') ? 'error' : ''}
                      mask="99"
                    />
                  </S.InputGroup>
                </S.FormRow>
                <Button
                  type="submit"
                  title="Clique aqui para finalizar seu pagamento"
                >
                  Finalizar pagamento
                </Button>
                <Button
                  type="button"
                  title="Clique aqui para retornar para aos campos de endereço"
                  onClick={handleBackToDelivery}
                >
                  Voltar para a edição de endereço
                </Button>
              </>
            )}
          </form>
        )}
      </S.Sidebar>
    </S.CardContainer>
  );
};

export default Checkout;







