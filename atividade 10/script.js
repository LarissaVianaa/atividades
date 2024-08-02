  // Função para criar uma matriz 3x3 com os elementos fornecidos pelo usuário
  function criarMatriz3x3() {
    // Inicializa uma matriz 3x3 vazia
    let matriz = [[], [], []];

    // Loop para preencher cada linha da matriz
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // Solicita ao usuário o valor para cada posição da matriz
            let valor = prompt(`Digite o valor para a posição [${i}][${j}]:`);
            
            // Adiciona o valor na matriz
            matriz[i][j] = valor;
        }
    }

    // Exibe a matriz na tabela HTML
    exibirMatriz(matriz);
}

// Função para exibir a matriz em uma tabela HTML
function exibirMatriz(matriz) {
    const tabela = document.getElementById('matrizTable');
    tabela.innerHTML = ''; // Limpa o conteúdo anterior da tabela

    for (let i = 0; i < 3; i++) {
        const linha = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const celula = document.createElement('td');
            celula.textContent = matriz[i][j];
            linha.appendChild(celula);
        }
        tabela.appendChild(linha);
    }
}
