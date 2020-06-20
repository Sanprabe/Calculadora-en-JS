const numberButton = document.querySelectorAll('[data-number]')
const operatorButton = document.querySelectorAll('[data-operator]')
const clearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const equalButton = document.querySelector('[data-equals]')
const previousOperandTextElement = document.querySelector('[data-output-up]')
const currentOperandTextElement = document.querySelector('[data-output-down]')

class calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear() {
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperandTextElement.innerText.toString() + number.toString()
        // if (this.previousOperand === undefined) {
        //     this.previousOperand = ''
        // }
    }

    chooseOperation(operation) {
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
        // if (this.previousOperand === '') return
        // if (this.currentOperand !== '') {
        //     this.compute()
        // }
    }
    compute() {
        // let computation
        // const previous = parseFloat(this.previousOperand)
        // const current = parseFloat(this.currentOperand)
        // if (isNaN(previous) || isNaN(current) || this.operation === undefined) return
        // switch (this.operation) {
        //     case '+':
        //         computation = previous + current
        //         break
        //     case '-':
        //         computation = previous - current
        //         break
        //     case '*':
        //         computation = previous * current
        //         break
        //     case '/':
        //         computation = previous / current
        //     default:
        //         return
        // }
        // this.previousOperand = computation
        // this.operation = undefined
        // this.currentOperand = ''
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}

const calculadora = new calculator(previousOperandTextElement, currentOperandTextElement)

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.appendNumber(button.innerText)
        calculadora.updateDisplay()
    })
})

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.chooseOperation(button.innerText)
        calculadora.updateDisplay()
    })
})

// equalButton.addEventListener('click', button => {
//     calculadora.compute()
//     calculadora.updateDisplay()
// })

// clearButton.addEventListener('click', button => {
//     calculadora.clear()
//     calculadora.updateDisplay()
// })

// deleteButton.addEventListener('click', button => {
//     calculadora.delete()
//     calculadora.updateDisplay()
// })