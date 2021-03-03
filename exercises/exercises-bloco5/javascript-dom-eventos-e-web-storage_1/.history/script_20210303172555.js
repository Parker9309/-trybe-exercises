// parte 1
 paragrafos = document.getElementsByTagName('p') [0].innerText = "Homem Aranha 2"

//parte2
  function corDaTrybe() {
  let colorTrybe = document. getElementsByClassName('main-content')
  colorTrybe[0].style.BackgroundColor = rgb(76,164,109);
  
  for(var i = 0; i < colorTrybe.length; i++) {
  	colorTrybe[i].style.BackgroundColor = "green";
  }
};

//parte 3
function corDaTrybe() {
  let colorTrybe2 = document. getElementsByClassName('main-content center-content')
  
  for(var i = 0; i < colorTrybe2.length; i++) {
  	colorTrybe2[i].style.color = 'white';
  }
};