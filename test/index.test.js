const { describe, expect, it } = require("@jest/globals");
const ServicoExercicio = require("../src/services/exercicio.js");

describe("Testes do somar", () => {
  const servico = new ServicoExercicio();

  it("Somar dois números", () => {
    const result = servico.Somar(1, 2);

    expect(result).toBe(3);
  });

  it("Somar dois números sendo negativo", () => {
    const result = servico.Somar(-1, 2);

    expect(result).toBe(1);
  });

  it("Somar dois números sendo negativo", () => {
    const result = servico.Somar(1, -2);

    expect(result).toBe(-1);
  });

  it("Somar dois números não inteiros", () => {
    const result = servico.Somar(1.1, 2);

    expect(result).toBe(3.1);
  });

  it("Somar dois números não inteiros", () => {
    const result = servico.Somar(1, 3.1);

    expect(result).toBe(4.1);
  });

  it("Mostrar o erro", () => {
    const result = () => servico.Somar(1, "a");
    console.log("AQUIIIII");

    expect(result).toThrowError("Favor informar números");
  });

  it("Diminuir dois números", () => {
    const result = servico.Diminuir(2, 1);

    expect(result).toBe(1);
  });

  it("Diminuir dois números", () => {
    const result = servico.Diminuir(1, 2);

    expect(result).toBe(-1);
  });

  it("Diminuir dois números sendo negativo", () => {
    const result = servico.Diminuir(-1, 2);

    expect(result).toBe(-3);
  });

  it("Diminuir dois números sendo negativo", () => {
    const result = servico.Diminuir(1, -2);

    expect(result).toBe(3);
  });

  it("Diminuir dois números não inteiros", () => {
    const result = servico.Diminuir(3.1, 2);

    expect(result).toBe(1.1);
  });

  it("Somar dois números não inteiros", () => {
    const result = servico.Diminuir(1, 3.1);

    expect(result).toBe(-2.1);
  });

  it("Mostrar o erro", () => {
    const result = () => servico.Diminuir(1, "a");
    console.log("AQUIIIII");

    expect(result).toThrowError("Favor informar números");
  });

  it("Multiplicar dois números", () => {
    const result = servico.Multiplicar(2, 2);

    expect(result).toBe(4);
  });

  it("Multiplicar dois números sendo negativo", () => {
    const result = servico.Multiplicar(-1, 2);

    expect(result).toBe(-2);
  });

  it("Multiplicar dois números sendo negativo", () => {
    const result = servico.Multiplicar(1, -2);

    expect(result).toBe(-2);
  });

  it("Multiplicar dois números não inteiros", () => {
    const result = servico.Multiplicar(3.1, 2);

    expect(result).toBe(6.2);
  });

  it("Multiplicar dois números não inteiros", () => {
    const result = servico.Multiplicar(1, 3.1);

    expect(result).toBe(3.1);
  });

  it("Mostrar o erro", () => {
    const result = () => servico.Multiplicar(1, "a");
    console.log("AQUIIIII");

    expect(result).toThrowError("Favor informar números");
  });

  it("Dividir dois números", () => {
    const result = servico.Dividir(2, 2);

    expect(result).toBe(1);
  });

  it("Dividir dois números sendo negativo", () => {
    const result = servico.Dividir(-2, 2);

    expect(result).toBe(-1);
  });

  it("Dividir dois números sendo negativo", () => {
    const result = servico.Dividir(2, -2);

    expect(result).toBe(-1);
  });

  // it('Dividir dois números não inteiros', () => {
  //    const result = servico.Dividir(3.1, 1.1)

  //    expect(result).toBe(3);
  // })

  // it('Dividir dois números não inteiros', () => {
  //    const result = servico.Dividir(3.1, 3)

  //    expect(result).toBe(1);
  // })

  it("Mostrar o erro", () => {
    const result = () => servico.Dividir(1, "a");
    console.log("AQUIIIII");

    expect(result).toThrowError("Favor informar números");
  });

  it("Potenciação", () => {
    const result = servico.Potenciacao(2, 2);

    expect(result).toBe(4);
  });

  it("Potenciação", () => {
    const result = servico.Potenciacao(3, 3);

    expect(result).toBe(27);
  });
});
