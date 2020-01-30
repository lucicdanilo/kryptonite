import React from "react";
import News from "./News";

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
    var response = "sadasdasd";

    return (
      <div>
        <h1>Informations</h1>
        <div></div>
        <div className="news">
          <News />
        </div>
      </div>
    );
  }
}

export default Informations;
