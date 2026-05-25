function sumar(cadena) {
  const numero = Number(cadena);
  if (!isNaN(numero)) 
    return numero;
  const elementos = cadena.split(",");
  let suma = 0;
  for (const elemento of elementos) {
    if (elemento.includes("-")) {
      const numeros = elemento.split("-");
      for (const n of numeros) 
        suma += Number(n);
    } else 
      suma += Number(elemento);
  }
  return suma;
}

export default sumar;