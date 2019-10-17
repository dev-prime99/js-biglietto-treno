
var km, eta, prezzo, mino, over, finale;

// Numero km cliente
km = prompt("Quanti Kilometri vuoi fare?");

// Anni del cliente
eta = prompt("Quanti anni hai?");

// Prezzo finale
prezzo = km * 0.21;

// Sconto Minorenne
mino = (prezzo / 100) * 20;

// Sconto Over
over = (prezzo / 100) * 40;

// Calcolo costo finale
if (eta <= 18){
  finale = prezzo - mino;
} else if (eta > 65){
  finale = prezzo - over;
} else{
  finale = prezzo;
}
