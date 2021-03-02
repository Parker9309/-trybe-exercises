function maior(palavras) {
  let maiorNumero = palavras[0];
  for (let indice in palavras) {
    if (maiorNumero.length < palavras[indice].length) {
      maiorNumero = palavras[indice];
    }
  }
  return maiorNumero;
}

console.log(maiorNumero(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 