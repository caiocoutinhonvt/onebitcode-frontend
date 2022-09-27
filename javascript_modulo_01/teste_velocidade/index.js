const firstVelocity = prompt('Insira a velocidade do primeiro carro')
const secondVelocity = prompt('Insira a segunda velocidade')

if (firstVelocity > secondVelocity) {
    alert('O primeiro carro é mais veloz')
}
else if (firstVelocity == secondVelocity){
    alert('Os dois carros tem a mesma velocidade')
}
else{
    alert('O segundo carro é mais veloz')
}