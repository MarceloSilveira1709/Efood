import efood from '../../assets/images/logo.svg'
import sociais from '../../assets/images/redes_sociais.svg'




import { Container, Logo } from './styles'



const Footer = () => (
  <Container>
    <div className="">
      <div>
        <Logo src={efood} alt="Efood"/>
      </div>
        <Logo src={sociais} alt="Redes Scoiais"/>
      <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
    </div>
  </Container>
)

export default Footer
