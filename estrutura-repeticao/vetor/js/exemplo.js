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
    vet.push(Number(prompt(` Informe o ${i + 1}o. número `)))
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


vai cair exercicio para ver qual numero é o maior
// 
function exe4() {

  let vet = [], aux[]
  let media = 0

  for (let i = 0; i < 8; i++) {
    vet[i] = Number(prompt(`${i}o. número: `))
  }
  for (let i = 0; i < 8; i++) {
    media += vet[i]
  }
  media = media / vet.length

}

function exe5() {
}

function exe6() {
}


