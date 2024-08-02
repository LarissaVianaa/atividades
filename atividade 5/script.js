function contarnum() {

  let n1 = Number(window.prompt('Digite um número limitador para contar: '))
  let res = document.querySelector('section#saida')






  let cont = 0
  while (cont <= n1) {

  if (cont % 1==0) {
  saida.innerHTML += `<strong> ${cont} </strong>;`

  } else {
  saida.InnerHTML +=  `${cont} `

  }
  cont ++
  }
  saida.innerHTML += 'Aqui está a contagem até o limitador que você inseriu!'
  }

