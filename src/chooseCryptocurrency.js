import React from "react";

// If localSTorage dont have information about selected currency then render this!

class Choose extends React.Component {
  state = {
    btc: false,
    eth: false,
    xrp: false,
    bch: false,
    ada: false,
    ltc: false,
    currency: "European Euro"
  };
  handleCheck = event => {
    switch (event.target.name) {
      case "btc":
        this.setState({ btc: event.target.checked });
        break;
      case "eth":
        this.setState({ eth: event.target.checked });
        break;
      case "xrp":
        this.setState({ xrp: event.target.checked });
        break;
      case "bch":
        this.setState({ bch: event.target.checked });
        break;
      case "ada":
        this.setState({ ada: event.target.checked });
        break;
      case "ltc":
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
    event.preventDefault();
    var chosenCryptocurrency = [];
    var chosenCurrency = this.state.currency;
    if (this.state.btc) {
      chosenCryptocurrency.push("btc");
    }
    if (this.state.eth) {
      chosenCryptocurrency.push("eth");
    }
    if (this.state.xrp) {
      chosenCryptocurrency.push("xrp");
    }
    if (this.state.bch) {
      chosenCryptocurrency.push("bch");
    }
    if (this.state.ada) {
      chosenCryptocurrency.push("ada");
    }
    if (this.state.ltc) {
      chosenCryptocurrency.push("ltc");
    }
    console.log(chosenCryptocurrency);
    console.log(chosenCurrency);
    if (chosenCryptocurrency.length >= 1) {
      // Main component for displaying data!
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
            <option>U.S. Dollar</option>
            <option>European Euro</option>
            <option>Japanese Yen</option>
            <option>British Pound</option>
            <option>Swiss Franc</option>
            <option>Canadian Dollar</option>
            <option>Australian Dollar</option>
            <option>New Zealand Dollar</option>
            <option>South African Rand</option>
          </select>
        </div>
        <input type="submit" className="chooseCryptocurrency" value="Submit" />
      </form>
    );
  }
}

export default Choose;
