import { useDispatch } from "react-redux";
import { add , open} from "../../store/reducers/cart";

import fechar from "../../assets/images/fechar.png";
import { Menu } from "../../pages/Menus";

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
    dispatch(open())
  };

  return (
    <S.Overlay>
      <S.ContainerModal>
    <S.Modal className={modalIsOpen ? "visivel" : ""}>
        <S.Image style={{ backgroundImage: `url(${cardapio.foto})` }} />
        <div>
          <S.Close>
            <img
              src={fechar}
              alt="Icone de fechar"
              onClick={() => setModalIsOpen(false)}
            />
          </S.Close>
          <S.Taste>{cardapio.nome}</S.Taste>
          <S.Text>{cardapio.descricao}</S.Text>
          <S.Text>Serve: {cardapio.porcao}</S.Text>
          <S.Button onClick={() => {
            addToCart();
            setModalIsOpen(false);
          }}>
            Adicionar ao carrinho - {cardapio.preco}
          </S.Button>
        </div>
    </S.Modal>
    </S.ContainerModal>
    </S.Overlay>
  );
};

export default ModalProduct;

