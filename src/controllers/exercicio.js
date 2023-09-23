const ServicoExercicio = require("../services/exercicio.js");

const servico = new ServicoExercicio();

class ControllerExercicio {
  Somar(req, res) {
    try {
      const result = servico.Somar(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Verifique sua reposta" });
    }
  }

  Diminuir(req, res) {
    try {
      const result = servico.Diminuir(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Verifique sua reposta" });
    }
  }

  Multiplicar(req, res) {
    try {
      const result = servico.Multiplicar(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Verifique sua reposta" });
    }
  }

  Dividir(req, res) {
    try {
      const result = servico.Dividir(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Verifique sua reposta" });
    }
  }

  Potenciacao(req, res) {
    try {
      const result = servico.Potenciacao(req.body.base, req.body.expoente);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Verifique sua reposta" });
    }
  }
}

module.exports = ControllerExercicio;
