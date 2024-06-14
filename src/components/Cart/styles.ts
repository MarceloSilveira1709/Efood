import styled from "styled-components";
import { cores } from "../../styles";
import lixeira from '../../assets/images/lixeira.png'


export const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #000;
opacity: 0.7;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Produto = styled.div`
  background-color: ${cores.bege};
  max-width: 344px;
  min-height: 100px;
  display: flex;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height:80px;
    padding: 8px;
    object-fit: cover;
  }
`;

export const InfoProduto = styled.div`
  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`;


export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 38px 8px 0 8px;
`;

export const Prato = styled.h2`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.rosa};
  padding-top: 8px;
  padding-bottom: 16px;
`;

export const Preco = styled.p`
  font-size: 14px;
  color: ${cores.rosa};
`;

export const Total = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.bege};
  padding: 40px 8px 8px 16px;
`;



