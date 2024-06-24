import  headerImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'

import * as S from "./styles"

const Header = () => (
  <S.Image style={{backgroundImage: `url(${headerImg})` }}>
    <S.Logo src={logo} alt="Efood"/>
    <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
  </S.Image>
)

export default Header
