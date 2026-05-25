function sumar(cadena) {
  let cadena_a_numero = Number(cadena);
  if(!isNaN(cadena_a_numero)) 
    return cadena_a_numero;
  let numeros_en_cadena = cadena.split(',')
  let suma = 0;
  for(const numero of numeros_en_cadena)
    suma+=Number(numero);
  return suma;
}

export default sumar;