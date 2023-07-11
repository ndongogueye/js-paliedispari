
function generaNumeroRandom() {
  return Math.floor(Math.random() * 5) + 1;
}


function pari(numero) {
  return numero % 2 === 0;
}


function determinaVincitore(sceltaUtente, numeroUtente, numeroComputer) {
  let somma = numeroUtente + numeroComputer;
  let SommaPari = pari(somma);

  if ((sceltaUtente === 'pari' && SommaPari) || (sceltaUtente === 'dispari' && !SommaPari)) {
    return "Hai vinto";
  } else {
    return "Hai perso";
  }
}

let scelta = prompt("Scegli pari o dispari: ");


if (scelta === 'pari' || scelta === 'dispari') {

  let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5: "));
  
 o
  if (numeroUtente >= 1 && numeroUtente <= 5) {
   
    let numeroComputer = generaNumeroRandom();
    

    console.log(numeroUtente + numeroComputer );
    
to
    let risultato = determinaVincitore(scelta, numeroUtente, numeroComputer);
    console.log(risultato);
  } else {
    console.log("Il numero inserito non è valido");
  }
} else {
  console.log("La scelta non è valida");
}
