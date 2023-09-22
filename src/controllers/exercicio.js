const ServicoSomar = require("../services/exercicio.js")
const ServicoDiminuir = require("../services/exercicio.js")
const ServicoMultiplicar = require("../services/exercicio.js")
const ServicoDividir= require("../services/exercicio.js")

const servicoS = new ServicoSomar()
const servicoD = new ServicoDiminuir()
const servicoM = new ServicoMultiplicar()
const servicoDd = new ServicoDividir()

class ControllerSomar {
    Somar(req, res) {
        try {
            const result = servico.Somar(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Verifique sua reposta" })
        }
    }
}
module.exports = ControllerSomar


class ControllerDiminuir {
    Diminuir(req, res) {
        try {
            const result = servico.Diminuir(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Verifique sua reposta" })
        }
    }
}
module.exports = ControllerDiminuir


class ControllerMultiplicar {
    Multiplicar(req, res) {
        try {
            const result = servico.Multiplicar(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Verifique sua reposta" })
        }
    }
}
module.exports = ControllerMultiplicar


class ControllerDividir {
    Dividir(req, res) {
        try {
            const result = servico.Dividir(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Verifique sua reposta" })
        }
    }
}
module.exports = ControllerDividir