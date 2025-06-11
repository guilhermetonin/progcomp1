function exemplo() {

  let conta = 1 // conta de 1 a 10 > participantes
  let soma = 0

  while (conta <= 5) {
    alert(`oi`)
    soma = soma + conta
    conta++
  }
  alert(`${soma}`)
}

// conta | conta <= 5 | soma
// 1 | true | 1
// 2 | true | 3
// 3 | true | 6
// 4 | true | 10
// 5 | true | { 15 }
// 6 | false | não executa


// MÉDIA DAS NOTAS

function mediaNota() {

  let nota // guarda as notas
  let conta = 1 // conta de 1 a 6
  let soma = 0 // guarda a soma das notas

  while (conta <= 6) {
    nota = Number(prompt(`Informe a nota ${conta}`))
    soma = soma + nota
    conta++ // adiciona +1 em conta
  }
  let media = soma / 6 // descobre a media das notas
  alert(`A média das notas é ${media}`)
}


// PESQUISA DE SATISFAÇÃO

function pesquisaSatisfacao() {

  let nota // guarda as notas 
  let conta = 1 // conta de 1 a 10 > participantes
  let soma = 0
  let satisfeito = 0
  let insatisfeito = 0

  while (conta <= 10) {
    nota = Number(prompt(`Informe a nota de (0 a 10) do participante ${conta}`))

    if (nota >= 8 && nota <= 10) {
      satisfeito++ // adiciona +1 em pessoas satisfeitas
    }
    else if (nota >= 0 && nota < 5) {
      insatisfeito++ // adiciona +1 em pessoas insatisfeitas
    }
    else if (nota < 0 || nota > 10) { // || = OU
      alert(`Nota inválida`)
      continue // volta para o ínicio, o restante é ignorado
    }
    conta++ // vai adicionar 1 a conta == conta + 1
    soma += nota // soma = soma + nota > vai guardar a soma das 10 notas
  }

  let media = soma / 10 // vai fazer a media das notas
  alert(`Média das notas ${media.toFixed(1)}\nTotal de pessoas satisfeitas é ${satisfeito}\nTotal de pessoas insatisfeitas é ${insatisfeito}`)
}


// EXERCICIO 1 

function exe1() {

  let a, b, c, d, aux = 0
  let grupo = 1
  let conta = 1

  while (grupo <= 5) {
    a = Number(prompt(`Informe o número de A`))
    b = Number(prompt(`Informe o número de B`))
    c = Number(prompt(`Informe o número de C`))
    d = Number(prompt(`Informe o número de D`))

    while (conta <= 3) {
      if (a > b) {
        aux = a; a = b; b = aux;
      }
      if (b > c) {
        aux = b; b = c; c = aux;
      }
      if (c > d) {
        aux = c; c = d; d = aux;
      }
      conta++
    }
    alert(`Ordem crescente ${a} ${b} ${c} ${d}`)
    alert(`Ordem descrescente ${d} ${c} ${b} ${a}`)
  }
  grupo++
}


// EXERCICIO 2

function exe2() {
  let preco = 5.0
  const despesa = 200  // constante = valor não se muda
  let lucro = 0
  let qtde = 120
  let aux = ""
  let maiorLucro = 0
  let qtdeMaiorLucro = 0
  let precoMaiorLucro = 0

  while (preco >= 1.0) {
    lucro = (preco * qtde) - despesa
    aux = aux + "\n" + (`Preco: ${preco} Qtde: ${qtde} Lucro: ${lucro} Despesa: ${despesa}`)

    if (lucro > maiorLucro) {
      maiorLucro = lucro
      precoMaiorLucro = preco
      qtdeMaiorLucro = qtde
    }

    qtde = qtde + 26
    preco = preco - 0.5
  }
  alert(aux)
  alert(`Maior lucro ${maiorLucro} com preço ${precoMaiorLucro} e qtde ${qtdeMaiorLucro}`)

}

// EXERCÍCIO 3

function exe3() {

  let conta = 1
  let idade = 0
  let faixa1 = 0, faixa2 = 0, faixa3 = 0, faixa4 = 0, faixa5 = 0
  let porc1 = 0, porc5 = 0

  while (conta <= 8) {
    idade = Number(prompt(`Informe a idade da pessoa ${conta}`))

    if (idade >= 0 && idade <= 15) {
      faixa1++
    } else if (idade >= 16 && idade <= 30) {
      faixa2++
    } else if (idade >= 31 && idade <= 45) {
      faixa3++
    } else if (idade >= 46 && idade <= 60) {
      faixa4++
    } else if (idade > 60 && idade < 130) {
      faixa5++
    } else {
      alert(`Houve um erro.`)
      continue
    }
    conta++
  }

  porc1 = (faixa1 / 8) * 100
  porc5 = (faixa5 / 8) * 100

  alert(`Pessoas Faixa 1°: ${faixa1}\nPessoas Faixa 2°: ${faixa2}\nPessoas Faixa 3°: ${faixa3}\nPessoas Faixa 4°: ${faixa4}\nPessoas Faixa 5°: ${faixa5}\nFaixa 1 % = ${porc1}\nFaixa 5 % = ${porc5}`)

}

// EXERCÍCIO 4

function exe4() {

  let numero = Number(prompt(`Qual tabuada deseja?`))

  for (let conta = 1; conta <= 10; conta++) {
    console.log(`${numero} X ${conta} = ${numero * conta}`)
  }

}

// EXERCÍCIO 5

function exe5() {

  for (let numero = 1; numero <= 10; numero++) {

    console.log(`\nTabuada do ${numero}`)

    for (let conta = 1; conta <= 10; conta++) {
      console.log(`${numero} X ${conta} = ${numero * conta}`)
    }

  }

}

// EXERCÍCIO 6

function exe6() {

  let codigo, valor, nPrazo = 0, totalPrazo = 0, totalAvista = 0, nAvista = 0, total = 0

  for (let conta = 1; conta <= 3; conta++) {

    do { // CÓDIGO
      codigo = (prompt(`Informe o código:`));
    }
    while (codigo != 'V' && codigo != 'P')

    do { // VALOR
      valor = Number(prompt(`Informe o valor da compra:`));
    }
    while (valor <= 0)

    if (codigo == 'P') {
      totalPrazo += valor
    }
    else { // CÓDIGO É 'V'
      totalAvista += valor
    }
  }

  total = totalPrazo + totalAvista
  let prestacaoPrazo = totalPrazo / 3

  console.log(`Total Prazo: R$ ${totalPrazo.toFixed(2)}`)
  console.log(`Total Avista: R$ ${totalAvista.toFixed(2)}`)
  console.log(`Total de Todas as Vendas: R$ ${total.toFixed(2)}`)
  console.log(`Primeira Prestação Prazo: R$ ${prestacaoPrazo.toFixed(2)}`)

}

// EXERCÍCIO 7

function exe7() {

  let idade, peso, altura, qtde50 = 0, somaAltura = 0, qtdeAltura = 0, peso40 = 0

  for (let conta = 1; conta <= 5; conta++) {

    do {
      idade = Number(prompt(`(Pessoa ${conta}) Informe sua idade:`))
    }
    while (idade <= 0)

    do {
      peso = Number(prompt(`(Pessoa ${conta}) Informe seu peso:`))
    }
    while (peso <= 0)

    do {
      altura = Number(prompt(`(Pessoa ${conta}) Informe sua altura:`))
    }
    while (altura <= 0)

    if (idade > 50) {
      qtde50++
    }
    if (idade >= 10 && idade <= 20) {
      somaAltura += altura
      qtdeAltura++
    }
    if (peso <= 40) {
      peso40++
    }
  }
  console.log(`Quantidade de pessoas 50+ anos: ${qtde50}`)
  console.log(`Média das alturas de pessoas entre 10 e 20 anos: ${(somaAltura / qtdeAltura)}cm`)
  console.log(`Porcentagem de pessoas com -40KG: ${(peso40 / 5) * 100}%`)

}

// EXERCÍCIO 8

function exe8() {
  
  let idade = 0, peso = 0, altura = 0, corOlho, corCabelo
  let qtde50 = 0, qtde150 = 0, idade150 = 0, azul = 0, ruivo = 0

  for (let i = 1; i <= 6; i++) {

    do {
      idade = Number(prompt(`Pessoa ${i} - Idade:`))
    } while (idade <= 0)

    do {
      peso = Number(prompt(`Peso em kg:`)) 
    } while (peso <= 0)
    
    do {
      altura = Number(prompt(`Altura em cm:`))
    } while (altura <= 0)

    corOlho = prompt(`Cor dos olhos: | A- Azul | P - Preto | V - Verde | C - Castanho`).toUpperCase()
    corCabelo = prompt(`Cor do cabelo: | P - Preto | C - Castanho | L - Loiro | R - Ruivo`).toUpperCase()


    if (idade > 50 && peso < 60) {
      qtde50++
    }

    if (altura < 150) {
      idade150 += idade
      qtde150++
    }

    if (corOlho == 'A') {
      azul++
    }

    if (corCabelo == 'R' && corOlho !== 'A') {
      ruivo++
    }
    
  }

  console.log(`Qtde Idade +50 e Peso < 60kg : ${qtde50}`)
  console.log(`Média Idade com Altura < 1.50m : ${idade150 / qtde150}`)
  console.log(`Olhos azuis % : ${(azul / 6) * 100}`)
  console.log(`Qtde Ruivas sem olho Azul : ${ruivo}`)

}

// EXERCÍCIO 9

function exe9() {

  let idade = 0, peso = 0, altura = 0
  let mediaIdade = 0, qtde90 = 0, qtde190 = 0 

  for (let i = 0; i <= 2; i++) {

    do {
      idade = Number(prompt(`Pessoa ${i} - Idade:`))
    } while (idade <= 0)

    do {
      peso = Number(prompt(`Peso:`))
    } while (peso <= 0)

    do {
      altura = Number(prompt(`Altura:`))
    } while (altura <= 0)

    mediaIdade += idade

    if (peso > 90 && altura < 150) {
      qtde90++
    }

    if (altura > 190) {
      if (idade => 10 && idade <= 30)
      qtde190++
    }

  }
  console.log(`Média Idades: ${mediaIdade / 10}`)
  console.log(`Qtde peso +90kg e -1.50m: ${qtde90}`)
  console.log(`% 10 a 30 anos e +1.90m: ${(qtde190 / 6) * 100}`)

}

// EXERCÍCIO 10
function exe10() {
  let somaPares = 0
  let somaPrimos = 0
  let numero

  for (let i = 1; i <= 10; i++) {
    do {
      numero = Number(prompt(`Digite o ${i}o número:`))
    } while (numero <= 0)

    if (numero % 2 == 0) {
      somaPares += numero
    }

    let contadorDivisores = 0

    for (let divisor = 1; divisor <= numero; divisor++) {
      if (numero % divisor == 0) {
        contadorDivisores++
      }
    }

    if (contadorDivisores == 2) {
      somaPrimos += numero
    }
  }

  console.log(`Soma dos números Pares: ${somaPares}`)
  console.log(`Soma dos números Primos: ${somaPrimos}`)
}