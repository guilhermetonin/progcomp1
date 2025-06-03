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