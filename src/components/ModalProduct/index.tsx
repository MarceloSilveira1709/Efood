import { Botao, ContainerModal, Fechar, Imagem, Modal, Overlay, Sabor, Texto } from "./styles";
import fechar from "../../assets/images/fechar.png";
import { Cardapio } from "../../pages/Menus";
import { useDispatch } from "react-redux";
import { add , open} from "../../store/reducers/cart";

type Props = {
  modalEstaAberto: boolean;
  setModalEstaAberto: (value: boolean) => void;
  cardapio: Cardapio;
};

const ModalProduct = ({ modalEstaAberto, setModalEstaAberto, cardapio }: Props) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(cardapio));
    dispatch(open())
  };

  return (
    <Overlay>
      <ContainerModal>
    <Modal className={modalEstaAberto ? "visivel" : ""}>
        <Imagem style={{ backgroundImage: `url(${cardapio.foto})` }} />
        <div>
          <Fechar>
            <img
              src={fechar}
              alt="Icone de fechar"
              onClick={() => setModalEstaAberto(false)}
            />
          </Fechar>
          <Sabor>{cardapio.nome}</Sabor>
          <Texto>{cardapio.descricao}</Texto>
          <Texto>Serve: {cardapio.porcao}</Texto>
          <Botao onClick={() => {
            addToCart();
            setModalEstaAberto(false);
          }}>
            Adicionar ao carrinho - {cardapio.preco}
          </Botao>
        </div>
    </Modal>
    </ContainerModal>
    </Overlay>
  );
};

export default ModalProduct;

