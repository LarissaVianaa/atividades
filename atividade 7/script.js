const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const somar = document.getElementById('somar');
const resultado = document.getElementById('resultado');

somar.addEventListener('click', () => {
    const array = [parseFloat(num1.value), parseFloat(num2.value), parseFloat(num3.value)];
    const soma = array.reduce((a, b) => a + b, 0);
    resultado.textContent = `A soma é: ${soma}`;
});