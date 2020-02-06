import React from "react";
import News from "./News";
import { Line } from "react-chartjs-2";
import "./global";

class Informations extends React.Component {
  render() {
    var formData = JSON.parse(this.props.formData);
    var chosenCryptocurrency = formData["chosenCryptocurrency"];
    var chosenCurrency = formData["chosenCurrency"];
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
    urlPrices = urlPrices.substring(0, urlPrices.length - 1); // Removing last ","
    urlPrices = urlPrices.concat("&tsyms=");
    urlPrices = urlPrices.concat(chosenCurrency);

    var responsePrices = httpGet(urlPrices);
    responsePrices = JSON.parse(responsePrices);

    // Making list of li elements with informations
    const listOfChosenCryptocurrencies = [];
    for (i = 0; i <= chosenCryptocurrency.length - 1; i++) {
      listOfChosenCryptocurrencies.push(
        <li className="elementOfListOfChosenCryptocurrencies" key={i}>
          <span className="chosenCryptocurrencyList">
            {chosenCryptocurrency[i]}:
          </span>
          {responsePrices[chosenCryptocurrency[i]][chosenCurrency]}
          <span className="chosenCurrencyList">{chosenCurrency}</span>
        </li>
      );
    }

    // Daily History 10 Days
    var urlHistory = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=";
    var historicalData = [];
    var timeData = [];

    for (i = 0; i <= chosenCryptocurrency.length - 1; i++) {
      urlHistory = urlHistory.concat(chosenCryptocurrency[i]);
      urlHistory = urlHistory.concat("&tsym=");
      urlHistory = urlHistory.concat(chosenCurrency);
      urlHistory = urlHistory.concat("&limit=10");

      var responseHistory = httpGet(urlHistory);
      responseHistory = JSON.parse(responseHistory);
      responseHistory = responseHistory["Data"]["Data"];
      for (var j = 0; j <= 10; j++) {
        historicalData.push(responseHistory[j]["high"]);
        timeData.push(responseHistory[j]["time"]);
      }

      urlHistory = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=";
    }

    function timeConverter(UNIX_timestamp) {
      var a = new Date(UNIX_timestamp * 1000);
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      var month = months[a.getMonth()];
      var date = a.getDate();
      var time = date + " " + month;
      return time;
    }

    // Six colors
    var backgroundColor = [
      "rgba(0, 213, 72, 0.75)",
      "rgb(255, 30 , 30, 0.75)",
      "rgba(51, 147, 255, 0.75)",
      "rgb(255, 136, 30, 0.75)",
      "rgb(255, 235, 30, 0.75)",
      "rgb(255, 0 , 255, 0.75)"
    ];

    var labels = [
      timeConverter(timeData[0]),
      timeConverter(timeData[1]),
      timeConverter(timeData[2]),
      timeConverter(timeData[3]),
      timeConverter(timeData[4]),
      timeConverter(timeData[5]),
      timeConverter(timeData[6]),
      timeConverter(timeData[7]),
      timeConverter(timeData[8]),
      timeConverter(timeData[9]),
      timeConverter(timeData[10])
    ];

    var datasets = [];
    var dataArray = [];
    j = 0;
    for (i = 0; i <= chosenCryptocurrency.length - 1; i++) {
      var dataset = new Object();
      dataset.label = chosenCryptocurrency[i];
      dataset.backgroundColor = backgroundColor[i];
      for (var k = 0; k <= 10; k++) {
        dataArray.push(historicalData[j + k]);
      }
      dataset.data = dataArray;
      dataArray = [];
      datasets.push(dataset);
      j += 11;
    }

    var chart = {
      data: {
        labels: labels,
        datasets: datasets
      }
    };

    function refreshValues() {
      window.location.reload(false);
    }

    function clearFormData() {
      localStorage.removeItem("formData");
      window.location.reload(false);
    }

    return (
      <div>
        <div className="pricesAtThisMoment">
          <h2>Prices at this moment:</h2>
          <ul className="listOfCryptocurrencies">
            {listOfChosenCryptocurrencies}
          </ul>
          <div className="twoButtons">
            <button className="refreshButton" onClick={refreshValues}>
              Refresh
            </button>
            <button className="changeOptions" onClick={clearFormData}>
              Change Options
            </button>
          </div>
        </div>
        <div className="historyChart">
          <Line
            options={{
              responsive: true
            }}
            data={chart.data}
          />
          <div className="divNews">
            <News />
          </div>
        </div>
      </div>
    );
  }
}

export default Informations;
