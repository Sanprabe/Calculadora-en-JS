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
        // this.currentOperand = currentOperandTextElementconst.innerText.slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperandTextElement.innerText.toString() + number.toString()
        if (this.previousOperand === undefined) {
            this.previousOperand = ''
        }
    }

    chooseOperation(operation) {
        this.operation = operation
        if (this.previousOperand === '') {
            this.previousOperand = this.currentOperand
            this.currentOperand = ''
        } else if (this.currentOperand === '' || this.currentOperand === '.') {
            return
        } else {
            this.compute()
        }
    }

    compute() {

    }

    updateDisplay() {
        this.previousOperandTextElement.innerText = this.previousOperand
        this.currentOperandTextElement.innerText = this.currentOperand
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