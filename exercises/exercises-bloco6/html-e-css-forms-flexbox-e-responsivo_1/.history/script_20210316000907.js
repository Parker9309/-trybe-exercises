let opcoes = document.getElementById('estados');
function criarOpcoes() {
  let estadosBr = ['AC', 'AL', 'AP','AM', 'BA','CE', 'DF', 
  'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR','PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  for (let stateIndex = 0; stateIndex < estadosBr.length; stateIndex += 1) {
    let opcao = document.createElement('option');
    opcao.value = estadosBr[stateIndex].toLowerCase();
    opcao.id = 'estados';
    opcao.innerHTML = estadosBr[stateIndex];
    opcoes.appendChild(opcao);
  }
}
criarOpcoes()