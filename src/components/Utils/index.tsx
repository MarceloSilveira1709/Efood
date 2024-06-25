import { Menu } from "../../pages/Menus";

export const getTotalPrice = (items: Menu []) => {
  return items.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.preco);
  }, 0);
};
