import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia retornar 0 cuando la cadena esta vacia", () => {
    expect(sumar("")).toEqual(0);
  });
});