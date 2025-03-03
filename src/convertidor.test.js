import convertir from "./convertidor.js";

describe("convertir", () => {
  it("deberia convertir el numero 1 en I", () => {
    expect(convertir(1)).toEqual("I");
  });
});

describe("convertir", () => {
    it("deberia convertir el numero 2 en II", () => {
      expect(convertir(2)).toEqual("II");
    });
  });
  