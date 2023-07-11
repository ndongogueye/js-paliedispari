function checkPalindromo() {
    let parola = prompt("Inserisci una parola:");
    let parolaInversa = parola.split('').reverse().join('');
    
    if (parola === parolaInversa) {
      console.log(parola + " è una parola palindromo.");
    } else {
      console.log(parola + " non è  palindromo.");
    }
  }
  
  checkPalindromo();