function calcular() {
  // let declaração variavel sem tipo //
  let soma = 0;

  // recupera um valor da acaoSocial digitado //
  let acaoSocial = document.getElementById("acaoSocial").value;
  soma = soma + Number(acaoSocial);
  // recupera o valor da homenagem digitado //
  let homenagem = document.getElementById("homenagem").value;
  soma = soma + Number(homenagem);
  // recupera a quantidade de litros de leite //
  let leite = document.getElementById("leite").value;
  soma = soma + Number(2 * Number(leite));
  // recupera o kit alimentacao //
  let kitAvulso = document.getElementById("kitAvulso").value;
  soma = soma + Number(30 * Number(kitAvulso));
  // recupera o suplemento //
  let suplementoAvulso = document.getElementById("suplementoAvulso").value;
  soma = soma + Number(15 * Number(suplementoAvulso));
  let arrozCinco = document.getElementById("arrozCinco").value;
  soma = soma + Number(5 * Number(arrozCinco));
  // devolve o resultado para o HTML //
  document.getElementById("soma").innerHTML = soma.toFixed(2);
  // to.Fixed(2) = formatar números com casas decimais //
  // innerHTML = coloca a soma dentro do HTML //
}
