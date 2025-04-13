function calcular(){

  // declaração variável sem tipo
  let soma = 0, pontosKitSupl = 0, pontosSangue = 0
  let acaoSocial, homenagem, leite, kit, equipe, suplemento, sangue, arroz5kg, arroz1kg, feijao2kg, feijao1kg, macarrao, oleo

  // recupera o valor da AÇÃO SOCIAL digitado
  acaoSocial = Number(document.getElementById("acaoSocial").value)
  soma = soma + acaoSocial

  // HOMENAGEM
  homenagem = Number(document.getElementById("homenagem").value)
  soma = soma + homenagem

  // LITROS DE LEITE
  leite = Number(document.getElementById("leite").value)
  soma = soma + (2 * leite)

  // KITS DE ALIMENTAÇÃO
  kit = Number(document.getElementById("kit").value)

  // LATAS DE SUPL
  suplemento = document.getElementById("suplemento").value

  // ARROZ 5KG
  arroz5kg = Number(document.getElementById("arroz5kg").value)
  soma = soma + (arroz5kg * 5)

  // ARROZ 1KG
  arroz1kg = Number(document.getElementById("arroz1kg").value)
  soma = soma + arroz1kg

  // FEIJÃO 2KG
  feijao2kg = Number(document.getElementById("feijao2kg").value)
  soma = soma + (feijao2kg * 2)

  // FEIJÃO 1KG
  feijao1kg = Number(document.getElementById("feijao1kg").value)
  soma = soma + feijao1kg

  // MACARRÃO
  macarrao = Number(document.getElementById("macarrao").value)
  soma = soma + (macarrao / 2)

  // ÓLEO
  oleo = Number(document.getElementById("oleo").value)
  soma = soma + oleo

  // DOAÇÃO DE SANGUE
  sangue = Number(document.getElementById("sangue").value)

  // recupera as CORES DAS EQUIPES
  equipe = document.getElementById("equipe").value


  // KIT >= 97 && SUPL >= 49 = 5K pts + AVULSOS | (KITS VALE 30 pts) (SUPL VALE 15 pts)
  // SOMA TOTAL DE KITS E SUPLEMENTOS COM BASE NAS METAS

  if (equipe == "Laranja"){
      if (kit >= 97 && suplemento >= 49) {
          pontosKitSupl = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
      }
      else if (kit >= 78 && suplemento >= 39){
          pontosKitSupl = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
      }
      else if (kit >= 49 && suplemento >= 25) {
          pontosKitSupl = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
      }
      else if (kit >= 19 && suplemento >= 10){
          pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15)
      }
  } 

  else if (equipe == "Preta") {
    if (kit >= 103 && suplemento >= 52) {
        pontosKitSupl = 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15)
    } 
    else if (kit >= 82 && suplemento >= 42) {
        pontosKitSupl = 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15)
    }
    else if (kit >= 52 && suplemento >= 26) {
        pontosKitSupl = 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15)
    }
    else if (kit >= 21 && suplemento >= 10) {
        pontosKitSupl = 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15)
    }
  }

  else if (equipe == "Roxa"){
    if (kit >= 102 && suplemento >= 51) {
        pontosKitSupl = 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15)
    } 
    else if (kit >= 82 && suplemento >= 41) {
        pontosKitSupl = 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15)
    }
    else if (kit >= 51 && suplemento >= 26) {
        pontosKitSupl = 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15)
    }
    else if (kit >= 20 && suplemento >= 10) {
        pontosKitSupl = 1000 + ((kit - 20) * 30) + ((suplemento - 10) * 15)
    } 
  }

  else if (equipe == "Verde"){
    if (kit >= 88 && suplemento >= 44) {
        pontosKitSupl = 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15)
    } 
    else if (kit >= 70 && suplemento >= 35) {
        pontosKitSupl = 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15)
    }
    else if (kit >= 44 && suplemento >= 22) {
        pontosKitSupl = 2500 + ((kit - 44) * 30) + ((suplemento - 22) * 15)
    }
    else if (kit >= 18 && suplemento >= 9) {
        pontosKitSupl = 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15)
    } 
  }

  else { // ASSUMO QUE É VERMELHA
    if (kit >= 93 && suplemento >= 47) {
        pontosKitSupl = 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15)
    } 
    else if (kit >= 74 && suplemento >= 38) {
        pontosKitSupl = 4000 + ((kit - 74) * 30) + ((suplemento - 38) * 15)
    }
    else if (kit >= 47 && suplemento >= 24) {
        pontosKitSupl = 2500 + ((kit - 47) * 30) + ((suplemento - 24) * 15)
    }
    else if (kit >= 19 && suplemento >= 9) {
        pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 9) * 15)
    } 
  }

  // SOMA DAS DOAÇÕES + (KITS/SUPL)
  soma = soma + pontosKitSupl


  // ex: LARANJA META = 49  (+ ADICIONAIS VALEM 20 pts)
  // SOMA TOTAL DAS DOAÇÕES DE SANGUE COM BASE NAS METAS

  if (equipe == "Laranja"){
      if (sangue >= 49){
          pontosSangue = 2500 + ((sangue - 49) * 20)
      }
      else {
          pontosSangue = sangue * 20
      }
  }

  else if (equipe == "Preta"){
      if (sangue >= 52){
          pontosSangue = 2500 + ((sangue - 52) * 20)
      }
      else {
          pontosSangue = sangue * 20
      }
  }

  else if (equipe == "Roxa"){
      if (sangue >= 51){
          pontosSangue = 2500 + ((sangue - 51) * 20)
      }
      else {
          pontosSangue = sangue * 20
      }
  }

  else if (equipe == "Verde"){
      if (sangue >= 44){
          pontosSangue = 2500 + ((sangue - 44) * 20)
      }
      else {
          pontosSangue = sangue * 20
      }
  }

  else { // ASSUMO QUE É VERMELHA
      if (sangue >= 47){
          pontosSangue = 2500 + ((sangue - 47) * 20)
      }
  }

  // SOMA DAS DOAÇÕES + SANGUE
  soma = soma + pontosSangue

  
  // DEVOLVE o resultado para o HTML
  document.getElementById("soma").innerHTML = soma.toFixed(2) + " pontos";

}