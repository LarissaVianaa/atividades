let contador = 10;
let intervalo;

document.getElementById('iniciar').addEventListener('click', iniciarContagem);

function iniciarContagem() {
    intervalo = setInterval(contar, 1000);
    document.getElementById('iniciar').disabled = true;
}

function contar() {
    contador--;
    document.getElementById('contador').textContent = `${contador}:00`;
    document.getElementById('contador').classList.add('contagem-regressiva');

    if (contador <= 0) {
        clearInterval(intervalo);
        document.getElementById('contador').textContent = 'Tempo esgotado!';
        document.getElementById('contador').classList.remove('contagem-regressiva');
    }
}