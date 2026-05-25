function sumar(cadena) {
  let delimitadores = [",", "-"];

  if (cadena.startsWith("//")) {
    const finDelimitadores = cadena.indexOf(" ");
    const parteDelimitadores = cadena.slice(2, finDelimitadores);
    const encontrados = parteDelimitadores.match(/\[(.*?)\]/g);
    
    if (encontrados) {
      delimitadores.push(
        ...encontrados.map(d => d.slice(1, -1))
      );
    }

    cadena = cadena.slice(finDelimitadores + 1);
  }

  const numero = Number(cadena);
  
  if (!isNaN(numero)) 
    return numero;
  
  const regexDelimitadores = new RegExp(
    delimitadores.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")
  );

  const numeros = cadena.split(regexDelimitadores);
  let suma = 0;
  
  for (const numero of numeros) {
    const valor = Number(numero);

    if (valor < 1000) 
        suma += valor;
  }
  return suma;
}

export default sumar;