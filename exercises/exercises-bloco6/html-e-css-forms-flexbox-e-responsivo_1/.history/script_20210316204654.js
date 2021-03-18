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
et submitButton = document.getElementById('submit');
let inputAll = document.querySelectorAll('input');
let curriculumContainer = document.getElementById('curriculum');
let clearButton = document.getElementById('clear');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  for (let index = 0; index < inputAll.length; index += 1) {
    if(inputAll.length > 0) {
      let print = document.createElement('div');
      print.className = 'item-print';
      print.innerHTML = inputAll[index].value;
      curriculumContainer.style.border = '1px solid black';
      curriculumContainer.style.textAlign = 'justify';
      curriculumContainer.style.padding = '15px';
      curriculumContainer.appendChild(print); 
    }
  }
});

clearButton.addEventListener('click', function(event) {
  event.preventDefault();
  curriculumContainer.innerHTML = '';
  curriculumContainer.style.border = 'none';
  curriculumContainer.style.padding = 'none';
});