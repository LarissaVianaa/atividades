const arrayInput = document.getElementById('array');
const inverter = document.getElementById('inverter');
const resultado = document.getElementById('resultado');

inverter.addEventListener('click', () => {
    const array = arrayInput.value.split(',').map((elemento) => elemento.trim());
    const arrayInvertido = array.reverse();
    resultado.textContent = `Array invertido: ${arrayInvertido.join(', ')}`;
});