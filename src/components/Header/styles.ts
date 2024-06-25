import styled from "styled-components";
import { breakpoints, colors } from '../../styles';

export const Image = styled.header`
  width: 100%;
  display: grid;
  height: 384px;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 40px;
  }

`
export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  max-width: 540px;
  color: ${colors.pink};
  margin-bottom: 40px;
  text-align: center;
  `

export const Logo = styled.img`
  padding-top: 64px;
  justify-self: center;

`

