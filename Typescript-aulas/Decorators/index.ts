//This is the Decorator

function Log() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value

        descriptor.value = function (...args: any[]) {
            console.log(`------------------------------------`)
            console.log(`Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)}`)

            const result = originalMethod.apply(this, args)

            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`)
            console.log(`------------------------------------`)

            return result
        }
    }
}

class Planet {
    name: string

    constructor(name:string){
        this.name = name
    }

    @Log()
    calculate(value: number) {
        console.log(`Calculando vezes 2`)
        return value * 2
    }
}

const planet = new Planet("Terra")

const result = planet.calculate(5)

console.log(`Resultado: ${result}`)