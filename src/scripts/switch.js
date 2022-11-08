let indicator = document.getElementsByClassName("indicator")[0];
let inputForUSD = document.getElementById("USD");
let inputForEUR = document.getElementById("EUR");
let convertedUSD = document.getElementById("convertedUSD");
let convertedEUR = document.getElementById("convertedEUR");

function switchUSD() {
  indicator.style.left = "0px";
  indicator.style.borderRadius = "10px 0px 0px 10px";

  inputForUSD.style.display = "block";
  inputForEUR.style.display = "none";

  convertedUSD.style.display = "block";
  convertedEUR.style.display = "none";
}

function switchEUR() {
  indicator.style.left = "250px";
  indicator.style.borderRadius = "0px 10px 10px 0px";

  inputForUSD.style.display = "none";
  inputForEUR.style.display = "block";

  convertedUSD.style.display = "none";
  convertedEUR.style.display = "block";
}
