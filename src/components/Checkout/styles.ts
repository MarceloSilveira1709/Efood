import styled from 'styled-components';
import { colors } from '../../styles';

type InputGroupProps = {
  maxWidth?: string;
};

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  display: block;
  background-color: ${colors.pink};
  padding: 38px 8px 0 8px;
  width: 360px;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  h2 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.beige};
    margin-bottom: 16px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.beige};

  }

  p{
    font-size: 14px;
    color: ${colors.beige};
    margin-bottom: 20px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0.7;
`;

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  display: flex;
  flex-direction: column;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
    color: ${colors.beige};
  }

  input {
    padding: 8px;
    background-color: ${colors.beige};
    color: #000;
    font-weight: bold;
    border: 1px solid ${colors.beige};
    margin-bottom: 18px;

    &.error {
      border: 1px solid red;
    }
  }
`;

export const FormRow = styled.div`
  flex: auto;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;
`;

export const Button = styled.button`
  width: 344px;
  background-color: ${colors.beige};
  color: ${colors.pink};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  margin-bottom: 8px;
`


