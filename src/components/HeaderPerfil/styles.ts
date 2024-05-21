import styled from "styled-components";
import { cores } from '../../styles';



export const ImagemFundo = styled.header`
  width: 100%;
  height: 186px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 200px;
`
export const ImagemMassa = styled.section`
  width: 100%;
  height: 280px;
  margin-bottom: 56px;
  display: grid;
  padding-left: 340px;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Restaurante = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
  `

export const Logo = styled.img`
  justify-content: center;

`
export const Carrinho = styled.p`

  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
`
export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${cores.branca};
  margin-bottom: 34px;
  align-self: end;

`
export const Tipo = styled.p`

  font-size: 32px;
  font-weight: 100;
  color: ${cores.branca};
  margin-top: 25px;

`


