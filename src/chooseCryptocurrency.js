import React from "react";

// If localSTorage dont have information about selected currency then render this!

class Choose extends React.Component {
  state = {
    BTC: false,
    ETH: false,
    XRP: false,
    BCH: false,
    ADA: false,
    LTC: false,
    currency: "European Euro"
  };
  handleCheck = event => {
    switch (event.target.name) {
      case "BTC":
        this.setState({ btc: event.target.checked });
        break;
      case "ETH":
        this.setState({ eth: event.target.checked });
        break;
      case "XRP":
        this.setState({ xrp: event.target.checked });
        break;
      case "BCH":
        this.setState({ bch: event.target.checked });
        break;
      case "ADA":
        this.setState({ ada: event.target.checked });
        break;
      case "LTC":
        this.setState({ ltc: event.target.checked });
        break;
      default:
    }
  };

  handleSelect = event => {
    switch (event.target.value) {
      case "U.S. Dollar":
        this.setState({ currency: "USD" });
        break;
      case "European Euro":
        this.setState({ currency: "EUR" });
        break;
      case "Japanese Yen":
        this.setState({ currency: "JPY" });
        break;
      case "British Pound":
        this.setState({ currency: "GBP" });
        break;
      case "Swiss Franc":
        this.setState({ currency: "CHF" });
        break;
      case "Canadian Dollar":
        this.setState({ currency: "CAD" });
        break;
      case "Australian Dollar":
        this.setState({ currency: "AUD" });
        break;
      case "New Zealand Dollar":
        this.setState({ currency: "NZD" });
        break;
      case "South African Rand":
        this.setState({ currency: "ZAR" });
        break;
      default:
    }
  };

  handleSubmit = event => {
    var chosenCryptocurrency = [];
    var chosenCurrency = this.state.currency;
    if (chosenCurrency === "European Euro") {
      chosenCurrency = "EUR";
    }
    if (this.state.btc) {
      chosenCryptocurrency.push("BTC");
    }
    if (this.state.eth) {
      chosenCryptocurrency.push("ETH");
    }
    if (this.state.xrp) {
      chosenCryptocurrency.push("XRP");
    }
    if (this.state.bch) {
      chosenCryptocurrency.push("BCH");
    }
    if (this.state.ada) {
      chosenCryptocurrency.push("ADA");
    }
    if (this.state.ltc) {
      chosenCryptocurrency.push("LTC");
    }
    if (chosenCryptocurrency.length >= 1) {
      var obj = {
        chosenCryptocurrency: chosenCryptocurrency,
        chosenCurrency: chosenCurrency
      };
      var formDataJSON = JSON.stringify(obj);
      localStorage.setItem("formData", formDataJSON);
    } else {
      alert("Choose currency, please.");
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Choose cryptocurrency:</h1>
        <table className="tableOfCryptocurrency">
          <tr>
            <th>
              <label>
                Bitcoin (BTC)
                <input
                  name="BTC"
                  type="checkbox"
                  checked={this.state.btc}
                  onChange={this.handleCheck}
                />
              </label>
            </th>
            <th>
              <label>
                Ethereum (ETH)
                <input
                  name="ETH"
                  type="checkbox"
                  checked={this.state.eth}
                  onChange={this.handleCheck}
                />
              </label>
            </th>
            <th>
              <label>
                Ripple (XRP)
                <input
                  name="XRP"
                  type="checkbox"
                  checked={this.state.xrp}
                  onChange={this.handleCheck}
                />
              </label>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                Bitcoin Cash (BCH)
                <input
                  name="BCH"
                  type="checkbox"
                  checked={this.state.bch}
                  onChange={this.handleCheck}
                />
              </label>
            </th>
            <th>
              <label>
                Cardano (ADA)
                <input
                  name="ADA"
                  type="checkbox"
                  checked={this.state.ada}
                  onChange={this.handleCheck}
                />
              </label>
            </th>
            <th>
              <label>
                Litecoin (LTC)
                <input
                  name="LTC"
                  type="checkbox"
                  checked={this.state.ltc}
                  onChange={this.handleCheck}
                />
              </label>
            </th>
          </tr>
        </table>
        <div className="chooseCurrency" onChange={this.handleSelect}>
          <label>Choose currency:</label>
          <select value={this.state.currency}>
            <option name="USF">U.S. Dollar</option>
            <option name="EUR">European Euro</option>
            <option name="JPY">Japanese Yen</option>
            <option name="GBP">British Pound</option>
            <option name="CHF">Swiss Franc</option>
            <option name="CAD">Canadian Dollar</option>
            <option name="AUD">Australian Dollar</option>
            <option name="NZD">New Zealand Dollar</option>
            <option name="ZAR">South African Rand</option>
          </select>
        </div>
        <input type="submit" className="chooseCryptocurrency" value="Submit" />
      </form>
    );
  }
}

export default Choose;
