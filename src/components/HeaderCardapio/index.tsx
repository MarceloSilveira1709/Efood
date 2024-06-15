
import  headerImg from '../../assets/images/fundo.png'
import headerImgMassa from '../../assets/images/fundo_massa.png'
import {Carrinho, Container, ContainerMassa, ImagemFundo, ImagemMassa, Logo,Restaurante,Tipo, Titulo } from './styles'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'


const HeaderCardapio = () => {
  const dispatch = useDispatch ()
  const {items}= useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
    <ImagemFundo style={{backgroundImage: `url(${headerImg})` }}>
      <Container>

        <Restaurante >
        <Link to="/">Restaurantes</Link>
        </Restaurante>
      <Logo src={logo} alt="Efood"/>
      <Carrinho onClick={openCart}>{items.length} - produtos(s) no carrinho</Carrinho>
      </Container>
    </ImagemFundo>



    <ImagemMassa style={{backgroundImage: `url(${headerImgMassa})` }}>
      <ContainerMassa>
      <Tipo>Italiana</Tipo>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </ContainerMassa>
    </ImagemMassa>
    </>
  )
}

export default HeaderCardapio
