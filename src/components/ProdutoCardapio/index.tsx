import  { Card, Descricao, Titulo, Infos, Botao } from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
  porcao: string
  infos: string [];

  setModalEstaAberto: (value: boolean) => void

}

const ProdutoCardapio = ( {foto,  infos, nome, descricao, porcao,  setModalEstaAberto }: Props) => {

  return(
    <Card>
    <img src={foto} alt={nome} />
    <Titulo>{nome}</Titulo>
    <Descricao>
      {descricao}
    </Descricao>
    <Botao  onClick={() => setModalEstaAberto(true) }>Adicionar ao Carrinho</Botao>
  </Card>
  )
}

export default ProdutoCardapio
