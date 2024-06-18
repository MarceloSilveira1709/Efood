import styled from "styled-components";
import { cores } from "../../styles";


export const ContainerModal = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  ;
`
export const Modal = styled.div`

  position: fixed;
  background-color: ${cores.rosa};
  display: flex;
  height: 332px;
  max-width: 1036px;
  width: 100%;


  &.visivel {
    display: flex;
  }
`
export const Overlay = styled.div `
content: '';
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
z-index: 1;
}
`

export const Fechar = styled.header`
  display: flex;
  cursor: pointer;
  padding: 8px 8px;
  justify-content: flex-end;
`

;
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
  width: 100%;
`;

export const Imagem = styled.div`
  margin: 24px;
  width: 100%;
  display: block;
  max-width: 280px;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content; start;
`;

export const Sabor = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const Texto = styled.p`
  margin-top: 16px;
  font-size: 14px;
`;


