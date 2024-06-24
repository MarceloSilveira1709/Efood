import styled from "styled-components";
import { breakpoints, cores } from '../../styles';
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
  color: ${cores.rosa};
  text-decoration: none;
`;

export const Logo = styled.img`
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 10px;
  }

`
export const CartShopping = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }


`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${cores.branca};

`
export const Type = styled.p`

  font-size: 32px;
  font-weight: 100;
  color: ${cores.branca};
  margin-top: 25px;
  margin-bottom: 150px
`



