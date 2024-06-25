import styled from "styled-components";
import { colors } from "../../styles";
import lixeira from '../../assets/images/lixeira.png'


export const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #000;
opacity: 0.7;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Product = styled.div`
  background-color: ${colors.beige};
  max-width: 344px;
  max-height: 100px;
  display: flex;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height:80px;
    padding: 8px;
    object-fit: cover;
  }
`;

export const InfoProduct = styled.li`
  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 8px;
    bottom: 8px;
    cursor: pointer;
  }
`;


export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  z-index: 1;
  padding: 38px 8px 0 8px;
`;

export const Dish = styled.h2`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.pink};
  padding-top: 8px;
  padding-bottom: 16px;
`;

export const Price = styled.p`
  font-size: 14px;
  color: ${colors.pink};
`;

export const Totals = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.beige};
  padding-top: 40px;
  padding-bottom: 16px;
  justify-content: space-between;
`;


export const Button = styled.button`
  width: 300px;
  background-color: ${colors.beige};
  color: ${colors.pink};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
`



