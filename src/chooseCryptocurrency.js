import React from "react";

// If localSTorage dont have information about selected currency then render this!

class Choose extends React.Component {
  render() {
    return (
      <form>
        <h1>Choose cryptocurrency:</h1>
        <table className="tableOfCryptocurrency">
          <tr>
            <th>
              <label>
                Bitcoin (BTC)
                <input name="btc" type="checkbox" />
              </label>
            </th>
            <th>
              <label>
                Ethereum (ETH)
                <input name="eth" type="checkbox" />
              </label>
            </th>
            <th>
              <label>
                Ripple (XRP)
                <input name="xrp" type="checkbox" />
              </label>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                Bitcoin Cash (BCH)
                <input name="bch" type="checkbox" />
              </label>
            </th>
            <th>
              <label>
                Cardano (ADA)
                <input name="ada" type="checkbox" />
              </label>
            </th>
            <th>
              <label>
                Litecoin (LTC)
                <input name="ltc" type="checkbox" />
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
