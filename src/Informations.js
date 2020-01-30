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
    /*
    var url =
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=EUR";

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
    var chart = {
      data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "Video Mades",
            backgroundColor: "rgba(255, 0 , 255, 0.75)",
            data: [4, 5, 1, 10, 32, 2, 12]
          },
          {
            label: "Subscriptions",
            backgroundColor: "rgba(0, 255, 0, 0.75)",
            data: [14, 15, 21, 0, 12, 4, 20]
          }
        ]
      }
    };
    console.log(chart);

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
