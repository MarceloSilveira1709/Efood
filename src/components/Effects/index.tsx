import {Botao, Imagem, Modal, Sabor, Texto,} from "./styles"
import fechar from '../../assets/images/fechar.png'

import ImgFood from '../../assets/images/pizza.png'
import { useState } from "react"



const Effects = () => {

  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <Modal className={modalEstaAberto ? 'visivel' : ''}>
<Imagem style={{backgroundImage: `url(${ImgFood})`}}></Imagem>
<div>
  <img src={fechar} alt="Icone de fechar" onClick={() => setModalEstaAberto(true) }/>
  <Sabor>Pizza Margarita</Sabor>
<Texto>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável.
  Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade,
  manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento
  e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo.
  É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. <br/><br />
  Serve: de 2 a 3 pessoas
</Texto>
<Botao>Adicionar ao carrinho - R$ 60,90</Botao>
</div>
</Modal>
  )
}







export default Effects
