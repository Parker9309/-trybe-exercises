function indiceDoMenor(numeros) {
  let indiceMenor = 0;
  for (let indice in numeros) {
    if (numeros[indiceMenor] < numeros[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));