import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";
import fechar from "../../assets/images/fechar.png";
import * as S from "./styles";

type Props = {
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
  cardapio: Menu;
};

const ModalProduct = ({ modalIsOpen, setModalIsOpen, cardapio }: Props) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(cardapio));
    dispatch(open());
  };

  return (
    <S.Overlay>
      <S.ContainerModal>
        <S.Modal className={modalIsOpen ? "is-visible" : ""}>
          <S.Image style={{ backgroundImage: `url(${cardapio.foto})` }} />
          <S.Close>
            <img
              src={fechar}
              alt="Icone de fechar"
              onClick={() => setModalIsOpen(false)}
            />
          </S.Close>
          <div>
            <S.Taste>{cardapio.nome}</S.Taste>
            <S.Text>{cardapio.descricao}</S.Text>
            <S.Text>Serve: {cardapio.porcao}</S.Text>
            <S.Button
              onClick={() => {
                addToCart();
                setModalIsOpen(false);
              }}
            >
              Adicionar ao carrinho - {cardapio.preco}
            </S.Button>
          </div>
        </S.Modal>
      </S.ContainerModal>
    </S.Overlay>
  );
};

export default ModalProduct;

