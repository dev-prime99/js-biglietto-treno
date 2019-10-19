function calcolo(){

  var km, eta, prezzo, mino, over, finale;

  // Numero km cliente
  km=parseInt(document.getElementById("km").value);


  // Anni del cliente
  eta=parseInt(document.getElementById("eta").value);

  // Prezzo finale
  prezzo = (km * 0.21).toFixed(2);

  // Sconto Minorenne
  mino = ((prezzo / 100) * 20).toFixed(2);

  // Sconto Over
  over = ((prezzo / 100) * 40).toFixed(2);

  // Calcolo costo finale
  if ((km > 0) && (eta >= 0)) {
    if (eta < 18){
      finale = (prezzo - mino);
      document.getElementById("sconto_").innerText= mino + " €";
    } else if (eta > 65){
      finale = prezzo - over;
      document.getElementById("sconto_").innerText= over + " €";
    } else{
      finale = prezzo;
      document.getElementById("sconto_").innerText= "/";
    }
    document.getElementById("prezzo_").innerText=finale + " €";
    //document.getElementById("h2").style.display = "block";
  } else{
    document.getElementById("box").style.display = "flex";
    document.getElementById("normal").style.display = "none";
    document.getElementById('km').value = '';
    document.getElementById('eta').value = '';
    document.getElementById("sconto_").innerText= "Errore";
    document.getElementById("prezzo_").innerText= "Errore";
  }
}

function ritorno(){
  document.getElementById("box").style.display = "none";
  document.getElementById("normal").style.display = "flex";
}
