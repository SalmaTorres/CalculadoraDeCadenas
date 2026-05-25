function sumar(cadena) {
  let delimitador = ",";
  if (cadena.startsWith("//")) {
    delimitador = cadena[3];
    cadena = cadena.slice(5);
  }
  const numero = Number(cadena);
  if (!isNaN(numero)) 
    return numero;
  const elementos = cadena.split(delimitador);
  let suma = 0;
  for (const elemento of elementos) {
    const numeros = elemento.split(/[-,]/);
    for (const n of numeros) {
      const valor = Number(n);
      if (valor < 1000) 
        suma += valor;
    }
  }
  return suma;
}

export default sumar;