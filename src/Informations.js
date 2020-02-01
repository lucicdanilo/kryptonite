import React from "react";
import News from "./News";
import { Line } from "react-chartjs-2";

class Informations extends React.Component {
  render() {
    var formData = JSON.parse(this.props.formData);
    var chosenCryptocurrency = formData["chosenCryptocurrency"];
    var chosenCurrency = formData["chosenCurrency"];
    console.log(chosenCryptocurrency);
    console.log(chosenCurrency);
    // API Requests

    function httpGet(url) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", url, false);
      xmlHttp.send(null);
      return xmlHttp.responseText;
    }

    // Prices
    var urlPrices = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=";

    for (var i = 0; i <= chosenCryptocurrency.length - 1; i++) {
      urlPrices = urlPrices.concat(chosenCryptocurrency[i]);
      urlPrices = urlPrices.concat(",");
    }
    urlPrices = urlPrices.substring(0, urlPrices.length - 1);
    urlPrices = urlPrices.concat("&tsyms=");
    urlPrices = urlPrices.concat(chosenCurrency);

    var responsePrices = httpGet(urlPrices);
    responsePrices = JSON.parse(responsePrices);
    console.log(responsePrices);
    var cryptocurrencyPrices = responsePrices["BTC"];
    cryptocurrencyPrices = cryptocurrencyPrices["EUR"];

    // Daily History 10 Days
    var urlHistory = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=";
    var historicalData = [];
    var timeData = [];

    for (i = 0; i <= chosenCryptocurrency.length - 1; i++) {
      urlHistory = urlHistory.concat(chosenCryptocurrency[i]);
      urlHistory = urlHistory.concat("&tsym=");
      urlHistory = urlHistory.concat(chosenCurrency);
      urlHistory = urlHistory.concat("&limit=10");
      console.log(urlHistory);

      var responseHistory = httpGet(urlHistory);
      responseHistory = JSON.parse(responseHistory);
      responseHistory = responseHistory["Data"]["Data"];
      console.log(responseHistory);
      for (var j = 0; j <= 10; j++) {
        historicalData.push(responseHistory[j]["high"]);
        timeData.push(responseHistory[j]["time"]);
      }

      urlHistory = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=";
    }
    console.log(historicalData); // High price for evry chosen cryptocurrency
    console.log(timeData); // Time for label

    // Six colors
    var backgroundColor = [
      "rgb(255, 30 , 30, 0.75)",
      "rgba(0, 213, 72, 0.75)",
      "rgba(51, 147, 255, 0.75)",
      "rgb(255, 136, 30, 0.75)",
      "rgb(255, 235, 30, 0.75)",
      "rgb(255, 0 , 255, 0.75)"
    ];

    var chart = {
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            label: "Video Mades",
            backgroundColor: "rgb(255, 136, 30, 0.75)",
            data: [4, 5, 1, 10, 32, 2, 12, 12, 8, 2]
          },
          {
            label: "Subscriptions",
            backgroundColor: "rgba(51, 147, 255, 0.75)",
            data: [14, 15, 21, 0, 12, 4, 20, 8, 8, 4]
          }
        ]
      }
    };

    return (
      <div>
        <h1>Informations</h1>
        <div style={{ position: "relative", width: 600, height: 550 }}>
          <h3>Chart Samples</h3>
          <Line
            options={{
              responsive: true
            }}
            data={chart.data}
          />
        </div>
        <div className="news">
          <News />
        </div>
      </div>
    );
  }
}

export default Informations;
