import styled from "styled-components";
import { breakpoints, colors } from '../../styles';
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1040px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`
export const CoverRules = styled.div`
width: 100%;
display: block;
justify-self: center;
max-width: 1040px;

@media (max-width: ${breakpoints.desktop}) {
  max-width: 80%;
}
`


export const ImageBackground = styled.header`
  width: 100%;
  height: 186px;
  display: flex;
  justify-content: center;

`
export const CoverImage = styled.section`
  width: 100%;
  height: 280px;
  margin-bottom: 56px;
  display: grid;
  background-repeat: no-repeat;
  background-size: cover;

`

export const RestaurantLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.pink};
  text-decoration: none;
`;

export const Logo = styled.img`
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 10px;
  }

`
export const CartShopping = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.pink};
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }


`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.white};

`
export const Type = styled.p`

  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
  margin-top: 25px;
  margin-bottom: 150px
`



