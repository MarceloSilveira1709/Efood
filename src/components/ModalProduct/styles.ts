import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const Modal = styled.div`
  position: fixed;
  background-color: ${colors.pink};
  display: flex;
  height: 332px;
  max-width: 1036px;
  width: 100%;
  z-index: 2;
  }

  &.is-visible {
    display: flex;
    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }
  }
`;

export const Overlay = styled.div`
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

export const Close = styled.header`
  display: flex;
  cursor: pointer;
  padding: 8px 8px;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 218px;
  background-color: ${colors.beige};
  color: ${colors.pink};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  margin-top: 16px;
  cursor: pointer;
`;

export const Image = styled.div`
  margin: 24px;
  width: 100%;
  display: block;
  max-width: 280px;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: start;
`;

export const Taste = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const Text = styled.p`
  margin-top: 16px;
  font-size: 14px;
`;



