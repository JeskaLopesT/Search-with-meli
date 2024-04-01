export function formatNumber(price: number): string {
  const priceInReal = (price/1).toFixed(2);
  return parseFloat(priceInReal).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}