import * as readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function calculate(firstNumber: number, secondNumber: number, operator: string): number | string {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber
    case "-": 
      return firstNumber - secondNumber
    case "*":
      return firstNumber * secondNumber
    case "/":
      return secondNumber !== 0 ? firstNumber / secondNumber : "Erro: divisão por zero!"
    default:
      return "Operador inválido!"
  }
}

rl.question("Digite o primeiro número: ", (num1Str) => {
  const num1 = Number(num1Str)

  rl.question("Digite o segundo número: ", (num2Str) => {
    const num2 = Number(num2Str)

    rl.question("Digite o operador (+, -, *, /): ", (operator) => {
      const resultado = calculate(num1, num2, operator);

      console.log(`Resultado: ${resultado}`);
      rl.close();
    })
  })
})