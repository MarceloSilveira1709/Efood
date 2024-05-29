import styled from "styled-components"
import { cores } from "../../styles"



export const Card = styled.div`
  background-color: ${cores.rosa};
  position: relative;
  margin-bottom: 48px;
  max-width: 320px;

img{
  padding:8px;
}

`
export const Titulo = styled.h2`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.bege};
  padding-left: 8px;
  margin-top: 8px;
  margin-bottom: 16px;

`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px;
  display: block;
  color: ${cores.bege};


`

export const Infos = styled.div`
  position: absolute;
  top:16px;
  right: 16px;
  backgroud-color: ${cores.rosa};
`
export const Botao = styled.button`
  width: 300px;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  margin: 8px;
  cursor: pointer;
`
