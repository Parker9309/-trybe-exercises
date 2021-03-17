function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorNumero.length < palavras[indice].length) {
      maiorNumero = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 