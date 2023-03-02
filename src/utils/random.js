export  const randomNumber = (min, max) => {
  const amplitude = max - min;
  const aleatorioNumber = min + Math.round(Math.random() * amplitude); 
  return aleatorioNumber;
};