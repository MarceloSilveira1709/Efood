import styled from "styled-components";
import { cores } from "../../styles";


export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
  margin-bottom: 48px;
  max-width: 474px;

`
export const ImgFood = styled.img`
  display: block;
  width: 100%;
  height: 251px;
  object-fit: cover;
`
export const Titulo = styled.h2`
font-weight: bold;
font-size: 18px;
color: ${cores.rosa};
padding-left: 8px;
margin-top: 8px;
display:flex;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px;
  display: block;
  color: ${cores.rosa};


`

export const Infos = styled.div`
  position: absolute;
  top:16px;
  right: 16px;
  display: flex;

`
export const Tag = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.bege};
  max-width: 100%;
  height: 26px;
  text-align: center;
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin: 8px;
`
export const Nota = styled.span`
  color: ${cores.rosa};
  font-size: 20px;
  font-Weight: bold;
  padding-bottom: 8px;

`

export const Estrela = styled.img`
  width: 20px;
  height: 20px;
  margin: 8px;

`
export const Detalhes = styled.div`
  display: block;
  border: solid 1px ${cores.rosa};
  border-top: none;
`
export const Avaliacao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


  div{
    align-self: center ;

  }
`
export const Botao = styled.button`
background-color: ${cores.rosa};
  color: ${cores.bege};
  max-width: 100%;
  height: 26px;
  text-align: center;
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin: 8px;
  border:none;
  cursor: pointer;
`




