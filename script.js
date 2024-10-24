const simbolo = "A";
const contagem = prompt("Quantas linhas deve ter a pirâmide?");
const linhas = [];

function criarLinha(linhaAtual, contLinha) {
  return " ".repeat(contLinha - linhaAtual) + simbolo.repeat(2 * linhaAtual - 1) + " ".repeat(contLinha - linhaAtual);
}

for (let i = 1; i <= contagem; i++) {
  linhas.push(criarLinha(i, contagem));
}

  
let resultado = "";


for (const linha of linhas) {
  resultado = resultado + "\n" + linha;
}

  
  console.log(resultado);
  document.getElementById("display").innerHTML = resultado;