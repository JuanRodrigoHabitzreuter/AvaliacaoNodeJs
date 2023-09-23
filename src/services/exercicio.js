class ServicoExercicio {
  Somar(num1, num2) {
    console.log("Iniciando");
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Favor informar números");
    }
    const resultado = num1 + num2;

    return resultado;
  }

  Diminuir(num1, num2) {
    console.log("Iniciando");
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Favor informar números");
    }
    const resultado = num1 - num2;

    return resultado;
  }

  Multiplicar(num1, num2) {
    console.log("Iniciando");
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Favor informar números");
    }
    const resultado = num1 * num2;

    return resultado;
  }

  Dividir(num1, num2) {
    console.log("Iniciando");
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Favor informar números");
    }
    const resultado = num1 / num2;

    return resultado;
  }

  Potenciacao(base, expoente) {
    console.log("Iniciando");
    if (isNaN(base) || isNaN(expoente)) {
      throw new Error("Favor informar números");
    }
    const resultado = Math.pow(base, expoente);

    return resultado;
  }
}

module.exports = ServicoExercicio;
