import { Imagem , Titulo, Logo} from "./styles"
import  headerImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'


const Header = () => (
  <Imagem style={{backgroundImage: `url(${headerImg})` }}>
    <Logo src={logo} alt="Efood"/>
    <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
  </Imagem>
)

export default Header
