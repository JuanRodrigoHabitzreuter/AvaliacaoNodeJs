const express = require('express')
const ControllerExercicio = require('../controllers/exercicio.js')
const ControllerDiminuir = require('../controllers/exercicio.js')
const ControllerDividir = require('../controllers/exercicio.js')
const ControllerMultiplicar = require('../controllers/exercicio.js')

const controller = new ControllerExercicio()
const router = express.Router()
router.post('/api/exercicio', controller.Somar)

// const controller = new ControllerDiminuir()
// const router = express.Router()
router.post('/api/exercicio', controller.Diminuir)

// const controller = new ControllerMultiplicar()
// const router = express.Router()
router.post('/api/exercicio', controller.Multiplicar)

// const controller = new ControllerDividir()
// const router = express.Router()
router.post('/api/exercicio', controller.Dividir)

module.exports = router