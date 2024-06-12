import React from "react";
import { Card, Descricao, Titulo, Botao } from "./styles";
import { Cardapio } from "../../pages/Cardapios";

type Props = {
  id: number;
  foto: string;
  nome: string;
  descricao: string;
  porcao: string;
  preco: number;
  infos: string[];
  setModalEstaAberto: (value: boolean) => void;
  setProdutoSelecionado: React.Dispatch<React.SetStateAction<Cardapio | null>>;
};

const ProdutoCardapio: React.FC<Props> = ({
  id,
  foto,
  nome,
  descricao,
  porcao,
  preco,
  infos,
  setModalEstaAberto,
  setProdutoSelecionado,
}) => {
  const handleProdutoClick = () => {
    setProdutoSelecionado({
      id,
      foto,
      nome,
      descricao,
      porcao,
      preco,
    });
    setModalEstaAberto(true);
  };

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 160) + "...";
    }
    return descricao;
  };

  return (
    <Card onClick={handleProdutoClick}>
      <img src={foto} alt={nome} />
      <Titulo>{nome}</Titulo>
      <Descricao>{getDescricao(descricao)}</Descricao>
      <Botao>Ver detalhes</Botao>
    </Card>
  );
};

export default ProdutoCardapio;




