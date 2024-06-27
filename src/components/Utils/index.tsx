export const getTotalPrice = (items: Menu []) => {
  return items.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.preco);
  }, 0);
};

export const parseToBrl = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
