let firstName = prompt("Informe o primeiro nome do recruta:")

let secondName = prompt("Informe o sobrenome do recruta")

let studyField = prompt("Qual o campo de estudo do recruta?")

let yearOfBirth = prompt("Qual é o ano de nascimento do recruta?")

alert(
    "Recruta cadastrado com sucesso!\n" + 
    "\nNome Completo: " + firstName + "   " + secondName +
    "\nCampo de Estudo: " + studyField +
    "\nIdade: " + (2022 - yearOfBirth)
)