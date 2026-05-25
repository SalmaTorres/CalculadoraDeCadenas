function sumar(cadena) {
  if(Number(cadena) || Number(cadena)===0) 
    return Number(cadena);
  let numeros = cadena.split(',')
  return Number(numeros[0])+Number(numeros[1]);
}

export default sumar;