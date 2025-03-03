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

  describe("convertir", () => {
    it("deberia convertir el numero 5 en V", () => {
      expect(convertir(5)).toEqual("V");
    });
  });

  describe("convertir", () => {
    it("deberia convertir el numero 10 en X", () => {
      expect(convertir(10)).toEqual("X");
    });
  });  
  
  describe("convertir", () => {
    it("deberia convertir el numero 50 en L", () => {
      expect(convertir(50)).toEqual("L");
    });
  });  