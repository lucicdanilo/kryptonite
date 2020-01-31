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

    var url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=";

    for (var i = 0; i <= chosenCryptocurrency.length - 1; i++) {
      url = url.concat(chosenCryptocurrency[i]);
      url = url.concat(",");
    }
    url = url.substring(0, url.length - 1);
    url = url.concat("&tsyms=");
    url = url.concat(chosenCurrency);
    console.log(url);
    /*
    function httpGet(url) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", url, false);
      xmlHttp.send(null);
      return xmlHttp.responseText;
    }

    var response = httpGet(url);
    console.log(response);
    */

    // Chart Data

    // Mora biti 6 boja:
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
