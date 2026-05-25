import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia retornar 0 cuando la cadena esta vacia", () => {
    expect(sumar("")).toEqual(0);
  });
  it("deberia retornar el numero cuando tiene un numero", () => {
    expect(sumar("1")).toEqual(1);
  });
});