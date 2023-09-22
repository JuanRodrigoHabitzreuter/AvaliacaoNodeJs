class ServicoExercicio {
    Somar(num1, num2) {
        console.log('Iniciando')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números")
        }
        const resultado = num1 + num2
    
        return resultado;
    }
} 
module.exports = ServicoSomar

class ServicoDiminuir {
    Diminuir(num1, num2) {
        console.log('Iniciando')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números")
        }
        const resultado = num1 - num2
    
        return resultado;
    }
} 
module.exports = ServicoExercicio

class ServicoMultiplicar {
    Multiplicar(num1, num2) {
        console.log('Iniciando')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números")
        }
        const resultado = num1 * num2
    
        return resultado;
    }
} 
module.exports = ServicoMultiplicar

class ServicoMultiplicar {
    Multiplicar(num1, num2) {
        console.log('Iniciando')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Resultado é zero")
        }
        const resultado = num1 * 0
    
        return resultado;
    }
} 
module.exports = ServicoMultiplicar

class ServicoMultiplicar {
    Multiplicar(num1, num2) {
        console.log('Iniciando')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Resultado é zero")
        }
        const resultado = 0 * num2
    
        return resultado;
    }
} 
module.exports = ServicoMultiplicar


class ServicoMultiplicar {
    Multiplicar(num1, num2) {
        console.log('Iniciando')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Não vai rodar")
        }
        const resultado = null * num2
    
        return resultado;
    }
} 
module.exports = ServicoMultiplicar

class ServicoMultiplicar {
    Multiplicar(num1, num2) {
        console.log('Iniciando')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Não vai rodar")
        }
        const resultado = num1 * null
    
        return resultado;
    }
} 
module.exports = ServicoMultiplicar

class ServicoDividir {
    Dividir(num1, num2) {
        console.log('Iniciando')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números")
        }
        const resultado = num1 / num2
    
        return resultado;
    }
} 
module.exports = ServicoDividir

class ServicoDividir {
    Dividir(num1, num2) {
        console.log('Iniciando')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Resultado é zero")
        }
        const resultado = num1 / 0
    
        return resultado;
    }
} 
module.exports = ServicoDividir

class ServicoDividir {
    Dividir(num1, num2) {
        console.log('Iniciando')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Resultado é zero")
        }
        const resultado = 0 / num2
    
        return resultado;
    }
} 
module.exports = ServicoDividir

class ServicoDividir {
    Dividir(num1, num2) {
        console.log('Iniciando')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Não funciona")
        }
        const resultado = num1 / null
    
        return resultado;
    }
} 
module.exports = ServicoDividir

class ServicoDividir {
    Dividir(num1, num2) {
        console.log('Iniciando')
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Não funciona")
        }
        const resultado = null / num2
    
        return resultado;
    }
} 
module.exports = ServicoDividir