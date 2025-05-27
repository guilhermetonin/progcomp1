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

function exe5() {

  for (let numero = 1; numero <= 10; numero++) {

    console.log(`\nTabuada do ${numero}`)

    for (let conta = 1; conta <= 10; conta++) {
      console.log(`${numero} X ${conta} = ${numero * conta}`)
    }

  }

}

function exe6() {

  let nPrazo = 0, tPrazo = 0, tAvista = 0, nAvista = 0, total = 0

  for (let conta = 1; conta <= 5; conta++) {

    let codigo = (prompt(`Informe o código:`))
    let valor = Number(prompt(`Informe o valor da compra:`))

    if (codigo == "P" | codigo == "p") {
      tPrazo += valor
      nPrazo++
    }
    else if (codigo == "V" | codigo == "v") {
      tAvista += valor
      nAvista++
    }
    else {
      alert(`Houve um erro de digitação`)
      conta-- // foi adicionado +1 no conta, aqui ele diminuiu -1
      continue
    }

  }
  total = tPrazo + tAvista
  console.log(`Total Prazo: ${tPrazo} Total Avista: ${tAvista} Total de todas: ${total}`)

}



