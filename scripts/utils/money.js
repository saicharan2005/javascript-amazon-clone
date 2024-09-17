export function fomartprice(pricecents){
  return (Math.round(pricecents)/100).toFixed(2);
}