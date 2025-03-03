import convertir from "./convertidor.js";

describe("convertir", () => {
  it("deberia convertir el numero 1 en I", () => {
    expect(convertir(1)).toEqual("I");
  });
});
