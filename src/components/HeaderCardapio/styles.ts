import styled from "styled-components";
import { cores } from '../../styles';
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1040px;
`
export const ContainerMassa = styled.div`
width: 100%;
display: block;
align-items: self-start;
justify-self: center;
max-width: 1040px;

`


export const ImagemFundo = styled.header`
  width: 100%;
  height: 186px;
  display: flex;
  justify-content: center;

`
export const ImagemMassa = styled.section`
  width: 100%;
  height: 280px;
  margin-bottom: 56px;
  display: grid;
  background-repeat: no-repeat;
  background-size: cover;

`

export const RestauranteLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
  text-decoration: none;
`;

export const Logo = styled.img`
  justify-content: center;

`
export const Carrinho = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
`
export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${cores.branca};

`
export const Tipo = styled.p`

  font-size: 32px;
  font-weight: 100;
  color: ${cores.branca};
  margin-top: 25px;
  margin-bottom: 150px
`



