const numeroInput = document.getElementById('numero');
const verificarButton = document.getElementById('verificar');
const resultadoDiv = document.getElementById('resultado');

verificarButton.addEventListener('click', () => {
    const numero = parseInt(numeroInput.value);
    if (isNaN(numero)) {
        resultadoDiv.textContent = ' digite um número válido seu pobre';
        return;
    }

    if (numero % 2 === 0) {
        resultadoDiv.textContent = `O número ${numero} é par Sim`;
        resultadoDiv.classList.add('par');
        resultadoDiv.classList.remove('impar');
    } else {
        resultadoDiv.textContent = `O número ${numero} é ímpar Sim`;
        resultadoDiv.classList.add('impar');
        resultadoDiv.classList.remove('par');
    }
});