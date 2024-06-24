import efood from '../../assets/images/logo.svg'
import sociais from '../../assets/images/redes_sociais.svg'

import * as S from './styles'



const Footer = () => (
  <S.Container>
    <div className="">
      <div>
        <S.Logo src={efood} alt="Efood"/>
      </div>
        <S.Logo src={sociais} alt="Redes Scoiais"/>
      <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
    </div>
  </S.Container>
)

export default Footer
