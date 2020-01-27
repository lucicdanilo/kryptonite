import React from "react";

// If localSTorage dont have information about selected currency then render this!

class Choose extends React.Component {
  state = {
    btc: false,
    eth: false,
    xrp: false,
    bch: false,
    ada: false,
    ltc: false
  };
  handleCheck = event => {
    console.log(event.target.name);
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

  handleSubmit = event => {
    event.preventDefault();
    var chosenCryptocurrency = [];
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
                  name="btc"
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
                  name="eth"
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
                  name="xrp"
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
                  name="bch"
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
                  name="ada"
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
                  name="ltc"
                  type="checkbox"
                  checked={this.state.ltc}
                  onChange={this.handleCheck}
                />
              </label>
            </th>
          </tr>
        </table>
        <input type="submit" className="chooseCryptocurrency" value="Submit" />
      </form>
    );
  }
}

export default Choose;
