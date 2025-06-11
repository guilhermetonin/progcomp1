function exe1() {
  let vet = [], vetPares = [], vetImpares = []
  let qtdePares = 0, qtdeImpares = 0

  for (let i = 0; i < 6; i++) {
    vet.push(Number(prompt(`Informe o ${i + 1}o. número: `)))
  }

  for (let i = 0; i < 6; i++) {
    if (vet[i] % 2 == 0) {

    }
    else {
      vetImpares[i]
    }

  }


  console.log(`Quantidade de Pares: ${qtdePares}`)
  console.log(`Quantidade de Impares: ${qtdeImpares}`)

}


// ler um vetor de 10 elementos inteiros
// some 10 nos elementos da posicoes pares
// multiplique por 5 nos elementos das posicoes impares

// exercicio 1 - prova

function exe2() {

  let vet = [] // declaro vetor

  for (let i = 0; i < 2; i++) {
    vet.push(Number(prompt(` Informe o ${i+1}o. número `)))
  }

  for (let i = 0; i < 2; i++) {
    if (i % 2 == 0) { // posicao par
      vet[i] = vet[i] + 10
    }
    else { // posicao impar
      vet[i] = vet[i] * 5
    }
  }
  console.log(`${vet}`)

}

// exercicio 2 - prova

function exe3() {

  let vet = []
  let nota1 = 0, nota2 = 0, nota3 = 0

  for (let i = 0; i < 10; i++) {
    do {
      vet[i] = Number(prompt(`Informe a nota: 1- Gostou Muito 2- Gostou 3- Não gostou`))
    } while (vet[i] > 3 || vet[i] < 1) //  vet menor que 3 ou vet maior que 1
  }

  for (let i = 0; i < 10; i++) {
    if (vet[i] == 1) {
      nota1++
    }
    else if (vet[i] == 2) {
      nota2++
    }
    else { // assumo que é nota 3
      nota3++
    }
  }

  console.log(`Nota 1: ${nota1} pessoas | Nota 2: ${nota2} pessoas | Nota 3: ${nota3} pessoas`)
  console.log(`Nota 3: ${(nota3 / vet.length) * 100}%`)

}

function exe4() {

  let vet = []
  let maiores = [] 
  let media = 0

  for (let i = 0; i < 8; i++) {
    vet[i] = Number(prompt(`Informe o ${i+1}o. número:`))
    media = media + vet[i]
  }
  media = media / vet.length

  // maiores que a media
  let qtde = 0
  for (let i = 0; i < 8; i++) {

    if (vet[i] > media) {
      maiores.push(vet[i])
      qtde++
    }

  }
  
  console.log(`Média: ${media}`)
  console.log(`Tem ${qtde} valores acima da média`)
  console.log(`Valores acima da média: ${maiores}`)

}

function exe5() {

  let vet = []

  for (let i = 0; i < 10; i++) {
    vet[i] = Number(prompt(`Informe o ${i+1}o. número`))
  }

  let maiores = 0
  let menores = 0
  let iguais = 0

  for (let i = 0; i < 10; i++) {
    if (vet[i] > vet[0]) {
      maiores++
    }
    else if (vet[i] < vet[0]) {
      menores++
    }
    else {
      iguais++
    } 
  }
  
  console.log(`Maiores que o primeiro: ${maiores}`)
  console.log(`Menores que o primeiro: ${menores}`)
  console.log(`Iguais ao primeiro: ${iguais}`)

}

function exe6() {

  let vet = []

  for (let i = 0; i < 12; i++) {
    do {
    vet[i] = Number(prompt(`Informe o ${i+1}o. número`))
    } while (vet[i] < 0)
  }

  let numero
  do {
  numero = Number(prompt(`Informe o número a ser buscado`))
  } while (numero < 0)

  let qtde = 0
  let posicoes = []

  for (let i = 0; i < 12; i++) {
    if (numero == vet[i]) {
      qtde++
      posicoes.push(i)
    }
  }

  console.log(`Número a ser buscado ${numero}`)
  console.log(`Apareceu ${qtde} vezes, nas posições ${posicoes}`)

}


function ordememaioremenor() {

  let vet = []
  let aux = 0
  
  // informar numeros
  for (let i = 0; i < 5; i++) {

    do {
      vet[i] = Number(prompt(`Informe o ${i+1}o. número`))
    } while (vet[i] < 0)

  }


  // maior e menor valor
  let maiorValor = vet[0]
  let menorValor = vet[0]

  
  for (let i = 0; i < 5; i++) {
    if (maiorValor < vet[i]) {
      maiorValor = vet[i]
    }
    if (menorValor > vet[i]) {
      menorValor = vet[i]
    }
  }

  // ordenar
  for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 4; k++) {

      if (vet[k] > vet[k+1]) {
        aux = vet[k]
        vet[k] = vet[k+1]
        vet[k+1] = aux
      }

    }
  }



  console.log(`Menor valor: ${menorValor}`)
  console.log(`Maior valor: ${maiorValor}`)
  console.log(`Ordenado: ${vet}`)
}

