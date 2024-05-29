import styled from "styled-components";
import { cores } from "../../styles";

export const Modal = styled.div`
  margin-top: 250px;
  position: fixed;
  justify-self:center;
  background-color: ${cores.rosa};
  display: flex;
  height: 332px;
  max-width: 1036px;
  width: 100%;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  img{
    display: ;
    justify-content: end;
    cursor: pointer;
  {

`
export const Botao = styled.button`
  width: 218px;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  margin-top: 16px;
  cursor: pointer;
`

export const Imagem = styled.div`
margin: 24px;
width: 100%;
display: block;
max-width:280px;
height: 280px;
background-repeat: no-repeat;
background-size: cover;
`
export const Sabor = styled.h2`
margin-top: 32px;
font-size: 18px;
font-weight: bold
`

export const Texto = styled.p`
max-width:656px;
margin-top: 16px;
font-size: 14px;
`
