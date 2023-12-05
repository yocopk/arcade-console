let invio = document.getElementById("invio");
let tentativo = document.getElementById("tentativo");
let parolaNascosta = document.getElementById("parola-nascosta");
let visualizzaErrori = document.getElementById("errori");
let gameOver = document.getElementById("you-lose");
let youWin = document.getElementById("you-win");
let tastiera = document.getElementById("tastiera");
let visualizzaPunteggio = document.getElementsByClassName("punteggio");
let bottoni = document.getElementsByClassName("lettera-alfabeto");

let punteggio = 0;
let lettereGuessate = 0;

let parolaDaIndovinare = [
  "VEDOVA",
  "SECONDI",
  "CONTAGIOSO",
  "MIAO",
  "PULCINO",
  "PIATTO",
  "MARMELLATA",
  "ANTERIORE",
  "GHIACCIAO",
  "VETRINA",
  "AMMACCATURA",
  "DISCENDENTE",
  "AGNELLO",
  "INFIAMMAZIONE",
  "SELEZIONE",
  "FULMICOTONE",
  "PAUPERA",
  "CORTOMETRAGGIO",
  "OTORINOLARINGOIATRA",
  "CAVALLO",
  "CATAMARANO",
  "RISPOSTA",
];

let parolaSplittata = parolaDaIndovinare[parolaCasuale()].split("");
// console.log(parolaSplittata);

let lunghezzaParola = parolaSplittata.length;
// console.log(lunghezzaParola);

for (let i = 0; i < lunghezzaParola; i++) {
  let nuovaDiv = document.createElement("div");
  nuovaDiv.classList.add("lettera", "hidden-lettera");
  nuovaDiv.setAttribute("id", i);
  nuovaDiv.innerText = parolaSplittata[i];
  parolaNascosta.appendChild(nuovaDiv);
}

let conteggioErrore = 0;

// invio.addEventListener("click", function(){
//   let parolaInserita = tentativo.value.split("");
//   let letteraTrovata = false;
//   // console.log(parolaInserita);
//   for ( let i= 0; i < parolaInserita.length; i++ ){

//     for( let y = 0 ; y < parolaSplittata.length; y++ ){

//       if( parolaInserita[i] == parolaSplittata[y]) {
//         document.getElementById(y).classList.remove("hidden");
//         letteraTrovata = true;
//       }
//     }

//     if( letteraTrovata == false ) {
//       conteggioErrore++;

//     } else {
//       letteraTrovata = false;
//     }
//   }

//   visualizzaErrori.innerText = "numero di errori:" + conteggioErrore;
//   tentativo.value = "";

// })

function premiLettera(lettera, bottone) {
  let letteraTrovata = false;
  // bottone.removeAttribute("onclick");

  for (let y = 0; y < parolaSplittata.length; y++) {
    if (lettera == parolaSplittata[y]) {
      document.getElementById(y).classList.remove("hidden-lettera");
      lettereGuessate++;

      if (lettereGuessate == parolaSplittata.length) {
        lettereGuessate = 0;
        youWin.classList.remove("hidden");
        visualizzaErrori.classList.add("hidden");
        tastiera.classList.add("hidden");
        punteggio++;
        visualizzaPunteggio[1].innerText = "punteggio: " + punteggio;
      }

      letteraTrovata = true;
    }
  }

  if (!letteraTrovata) {
    // errore
    conteggioErrore++;
    conteggioErrore = haiPerso(conteggioErrore);
  }

  bottone.disabled = true;
}

function haiPerso(errori) {
  if (errori < 6) {
    visualizzaErrori.innerText = "numero di errori:" + conteggioErrore;
    return errori;
  } else {
    lettereGuessate = 0;
    gameOver.classList.remove("hidden");
    tastiera.classList.add("hidden");
    visualizzaErrori.classList.add("hidden");

    for (let y = 0; y < parolaSplittata.length; y++) {
      if (document.getElementById(y).classList.contains("hidden-lettera")) {
        document
          .getElementById(y)
          .classList.remove("hidden-lettera", "lettera");
        document.getElementById(y).classList.add("lettera-non-indovinata");
      }
    }

    visualizzaPunteggio[0].innerText = "punteggio: " + punteggio;
    punteggio = 0;

    return 0;
  }
}

function parolaCasuale() {
  return Math.round(Math.random() * (parolaDaIndovinare.length - 1));
}

function rigioca(vittoria) {
  if (vittoria) {
    youWin.classList.add("hidden");
  } else {
    gameOver.classList.add("hidden");
  }
  conteggioErrore = 0;
  visualizzaErrori.classList.remove("hidden");
  visualizzaErrori.innerText = "";
  tastiera.classList.remove("hidden");

  parolaNascosta.innerHTML = "";

  parolaSplittata = parolaDaIndovinare[parolaCasuale()].split("");
  console.log(parolaSplittata);

  lunghezzaParola = parolaSplittata.length;
  console.log(lunghezzaParola);

  for (let i = 0; i < lunghezzaParola; i++) {
    let nuovaDiv = document.createElement("div");
    nuovaDiv.classList.add("lettera", "hidden-lettera");
    nuovaDiv.setAttribute("id", i);
    nuovaDiv.innerText = parolaSplittata[i];
    parolaNascosta.appendChild(nuovaDiv);
  }

  for (let i = 0; i < 26; i++) {
    // console.log(i);
    bottoni[i].disabled = false;
  }
}
