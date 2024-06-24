import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.section`
justify-content: center;
display:grid;

`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  max-width: 1024px;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 380px;
    justify-content: center;
  }
`



