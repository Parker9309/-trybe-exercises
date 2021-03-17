let opcoes = document.getElementById('estados');
function criarOpcoes() {
  let estados = ['AC', 'AL', 'AP','AM', 'BA','CE', 'DF', 
  'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR','PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  for (let stateIndex = 0; stateIndex < estados.length; stateIndex += 1) {
    let opcao = document.createElement('option');
    opcao.value = estados[stateIndex].toLowerCase();
    opcao.id = 'state';
    opcao.innerHTML = estados[stateIndex];
    opcoes.appendChild(opcao);
  }
}
criarOpcoes()