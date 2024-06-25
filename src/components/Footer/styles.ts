import styled from "styled-components"
import { colors } from "../../styles"

export const Container = styled.footer`
  width: 100%;
  height: 300px;
  background-color: ${colors.beige};
  color: ${colors.lightBeige};
  font-size: 10px;
  display: grid;
  text-align: center;
  align-items: center;
  justify-content: center;

  p{
    padding-top: 80px;
    max-width: 480px;
  }


`

export const Logo = styled.img`
  padding-top: 38px;
`


