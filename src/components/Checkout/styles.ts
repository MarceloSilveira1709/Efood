import styled from 'styled-components';
import { cores } from '../../styles';

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
  background-color: ${cores.rosa};
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
    color: ${cores.bege};
    margin-bottom: 16px;
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
  margin-top: 8px;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
    color: ${cores.bege};
  }

  input {
    padding: 8px;
    background-color: ${cores.bege};
    color: #000;
    font-weight: bold;
    border: 1px solid ${cores.bege};
  }
`;

export const FormRow = styled.div`
  flex: auto;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;
`;


