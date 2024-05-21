
import  headerImg from '../../assets/images/fundo.png'
import headerImgMassa from '../../assets/images/fundo_massa.png'
import { Carrinho, ImagemFundo, ImagemMassa, Logo, Restaurante, Tipo, Titulo } from './styles'
import logo from '../../assets/images/logo.svg'




const HeaderPerfil = () => (
  <>
  <ImagemFundo style={{backgroundImage: `url(${headerImg})` }}>
  <Restaurante>Restaurantes</Restaurante>
    <Logo src={logo} alt="Efood"/>
    <Carrinho>0 produtos(s) no carrinho</Carrinho>
  </ImagemFundo>
  <ImagemMassa style={{backgroundImage: `url(${headerImgMassa})` }}>
  <Tipo>Italiana</Tipo>
  <Titulo>La Dolce Vita Trattoria</Titulo>
  </ImagemMassa>
  </>
)

export default HeaderPerfil
