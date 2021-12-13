let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";

function convertUSD(v) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let rate = data.USDBRL.ask;
      let valueConverted = v * rate;

      return (document.getElementById(
        "convertedUSD"
      ).innerHTML = `R$${valueConverted.toFixed(2)}`);
    });
}

function convertEUR(v) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let rate = data.EURBRL.ask;
      let valueConverted = v * rate;

      document.getElementById(
        "convertedEUR"
      ).innerHTML = `R$${valueConverted.toFixed(2)}`;
    });
}
