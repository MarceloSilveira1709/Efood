import styled from "styled-components"
import { cores } from "../../styles"



export const Card = styled.div`
  background-color: ${cores.rosa};
  position: relative;
  margin-bottom: 48px;
  max-width: 320px;
  max-height: 338px;

img{
  padding:8px;
  width: 320px;
  height: 167px;
}


`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.bege};
  padding-left: 8px;
`

export const Description = styled.p`
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
export const Button = styled.button`
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
