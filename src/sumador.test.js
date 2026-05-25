import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia retornar 0 cuando la cadena esta vacia", () => {
    expect(sumar("")).toEqual(0);
  });
  it("deberia retornar el numero cuando tiene un numero", () => {
    expect(sumar("1")).toEqual(1);
  });
  it("deberia retornar la suma de la cadena tiene dos numeros separados por una ','", () => {
    expect(sumar("1,2")).toEqual(3);
  });
  it("deberia retornar la suma de la cadena cuando tiene varios numeros separados por una ','", () => {
    expect(sumar("1,2,3,4")).toEqual(10);
  });
  it("deberia retornar la suma de la cadena cuando tiene varios numeros separados por una ',' o '-'", () => {
    expect(sumar("1-2-3-4")).toEqual(10);
  });
});