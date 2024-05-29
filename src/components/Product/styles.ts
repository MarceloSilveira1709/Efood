import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
  border: solid 1px ${cores.rosa};
  margin-bottom: 48px;
  max-width: 474px;

  ${TagContainer} {
    margin: 8px;
    cursor:pointer;
  }

`
export const Titulo = styled.h2`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.rosa};
  padding-left: 8px;
  margin-top: 8px;
  margin-bottom: 16px;

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
`
