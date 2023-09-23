const express = require("express");
const ControllerExercicio = require("../controllers/exercicio.js");

const controller = new ControllerExercicio();
const router = express.Router();

router.post("/api/somar", controller.Somar);
router.post("/api/diminiur", controller.Diminuir);
router.post("/api/multiplicar", controller.Multiplicar);
router.post("/api/subtrair", controller.Dividir);
router.post("/api/potenciacao", controller.Potenciacao);
router.get("/api/exercicio", (_, res) => {
  res.send("Soma, Diminuir, Multiplicar, Dividir, Potenciacao");
});

module.exports = router;
