import React from "react";

class Informations extends React.Component {
  render() {
    var formData = JSON.parse(this.props.formData);
    var chosenCryptocurrency = formData["chosenCryptocurrency"];
    var chosenCurrency = formData["chosenCurrency"];
    console.log(chosenCryptocurrency);
    console.log(chosenCurrency);
    // API Call

    return (
      <div>
        <h1>Informations</h1>
      </div>
    );
  }
}

export default Informations;
