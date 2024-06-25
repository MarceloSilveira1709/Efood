import React from "react";

import { Menu } from "../../pages/Menus";

import * as S from "./styles";

type Props = {
  id: number;
  foto: string;
  nome: string;
  descricao: string;
  porcao: string;
  preco: number;
  infos: string[];
  setModalIsOpen: (value: boolean) => void;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Menu | null>>;
};

const ProductMenu: React.FC<Props> = ({
  id,
  foto,
  nome,
  descricao,
  porcao,
  preco,
  infos,
  setModalIsOpen,
  setSelectedProduct,
}) => {
  const handleProdutoClick = () => {
    setSelectedProduct({
      id,
      foto,
      nome,
      descricao,
      porcao,
      preco,
    });
    setModalIsOpen(true);
  };

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 160) + "...";
    }
    return descricao;
  };

  return (
    <S.Card onClick={handleProdutoClick}>
      <img src={foto} alt={nome} />
      <S.Title>{nome}</S.Title>
      <S.Description>{getDescricao(descricao)}</S.Description>
      <S.Button title={`Clique aqui para conhecer melhor o ${nome}`}>Ver detalhes</S.Button>
    </S.Card>
  );
};

export default ProductMenu;




