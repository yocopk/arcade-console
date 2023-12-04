let invio = document.getElementById("invio");
let tentativo = document.getElementById("tentativo");
let parolaNascosta = document.getElementById("parola-nascosta");
let visualizzaErrori = document.getElementById("errori");

let parolaDaIndovinare = "simonedimeglio";

let parolaSplittata = parolaDaIndovinare.split("");
console.log(parolaSplittata);

let lunghezzaParola = parolaSplittata.length;
console.log(lunghezzaParola);

for (let i = 0; i < lunghezzaParola; i++) {

  let nuovaDiv = document.createElement("div");
  nuovaDiv.classList.add( "lettera", "hidden");
  nuovaDiv.setAttribute("id" , i);
  nuovaDiv.innerText = parolaDaIndovinare[i];
  parolaNascosta.appendChild(nuovaDiv);
}


let conteggioErrore = 0;

invio.addEventListener("click", function(){
  let parolaInserita = tentativo.value.split("");
  let letteraTrovata = false;
  // console.log(parolaInserita);
  for ( let i= 0; i < parolaInserita.length; i++ ){

    for( let y = 0 ; y < parolaSplittata.length; y++ ){

      if( parolaInserita[i] == parolaSplittata[y]) {
        document.getElementById(y).classList.remove("hidden"); 
        letteraTrovata = true;
      } 
    }

    if( letteraTrovata == false ) {
      conteggioErrore++;

    } else {
      letteraTrovata = false;
    }
  }



  
  visualizzaErrori.innerText = "numero di errori:" + conteggioErrore;
  tentativo.value = "";

})

