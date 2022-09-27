const firstNumber = prompt('Informe o primeiro número:')
const secondNumber = prompt('Informe o segundo número:')


x = parseFloat(firstNumber)
y = parseFloat(secondNumber)

const sum = x + y
const subtraction = x- y
const division = x / y
const multiplication = x * y 

alert(
    "Resultados:\n" + 
    "\n Soma: " + sum +
    "\n Subtração: " + subtraction +
    "\n Divisão: " + division +
    "\n Multiplicação: " + multiplication 
)