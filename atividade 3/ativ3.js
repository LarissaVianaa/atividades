function calcularIdade() {
    const anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    let resultado = '';
    let classificacao = '';

    if (idade >= 0 && idade <= 12) {
        classificacao = 'crianca';
        resultado = `Você é uma criança birrenta de ${idade} anos.`;
    } else if (idade >= 13 && idade <= 19) {
        classificacao = 'adolescente';
        resultado = `Você é um adolescente pobre de ${idade} anos.`;
    } else if (idade >= 20 && idade <= 64) {
        classificacao = 'adulto';
        resultado = `Você é um adulto CLT de ${idade} anos.`;
    } else if (idade >= 65) {
        classificacao = 'idoso';
        resultado = `Você é um idoso aposentado de ${idade} anos.`;
    } else {
        resultado = 'Insira um ano válido de nascimento.';
    }

    document.getElementById('resultado').textContent = resultado;
    document.getElementById('resultado').classList.add(classificacao);
}

document.getElementById('calcular').addEventListener('click', calcularIdade);