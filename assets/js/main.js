function calcolo(){

  var km, eta, prezzo, mino, over, finale;

  // Numero km cliente
  km=parseInt(document.getElementById("km").value);


  // Anni del cliente
  eta=parseInt(document.getElementById("eta").value);

  // Prezzo finale
  prezzo = km * 0.21;

  // Sconto Minorenne
  mino = (prezzo / 100) * 20;

  // Sconto Over
  over = (prezzo / 100) * 40;

  // Calcolo costo finale
  if (eta < 18){
    finale = prezzo - mino;
    document.getElementById("sconto_").innerText= mino + " €";
  } else if (eta > 65){
    finale = prezzo - over;
    document.getElementById("sconto_").innerText= over + " €";
  } else{
    finale = prezzo;
    document.getElementById("sconto_").innerText= "/";
  }

  // Scrittura Risultato
  document.getElementById("prezzo_").innerText=finale + " €";
  console.log(finale);


}
