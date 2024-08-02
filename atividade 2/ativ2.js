const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const num3Input = document.getElementById('num3');
const verificarButton = document.getElementById('verificar');
const resultadoDiv = document.getElementById('resultado');

verificarButton.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const num3 = parseFloat(num3Input.value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultadoDiv.textContent = 'Por favor, digite números válidos';
        return;
    }

    const maior = Math.max(num1, num2, num3);
    resultadoDiv.textContent = `O maior número é ${maior}`;
    resultadoDiv.classList.add('maior');
});