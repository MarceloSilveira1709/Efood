import Checkout from '../Checkout';

import React, { Dispatch, SetStateAction } from 'react';

import { CardContainer } from "../Checkout/styles";

interface CardProps {
  setDelivery: Dispatch<SetStateAction<boolean>>;
}

const Card: React.FC<CardProps> = ({ setDelivery }) => (
  <CardContainer>
    <Checkout setDelivery={setDelivery} />
  </CardContainer>
);

export default Card;


