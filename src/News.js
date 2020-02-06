import React from "react";
import "./global";

class News extends React.Component {
  render() {
    var urlNews = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN";

    function httpGet(url) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", url, false);
      xmlHttp.send(null);
      return xmlHttp.responseText;
    }

    var responseNews = httpGet(urlNews);
    responseNews = JSON.parse(responseNews);

    var publishedOn = [];
    var newsTitles = [];
    var newsBody = [];

    for (var i = 0; i <= responseNews["Data"].length - 1; i++) {
      publishedOn.push(timeConverter(responseNews["Data"][i]["published_on"]));
      newsTitles.push(responseNews["Data"][i]["title"]);
      newsBody.push(responseNews["Data"][i]["body"]);
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
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time =
        date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
      return time;
    }

    return (
      <div>
        <h3>News</h3>
        <div className="newsComponent">
          <h4 className="newsTitle">{newsTitles[0]}</h4>
          <p className="newsBody">{newsBody[0]}</p>
          <p className="newsTime">{publishedOn[0]}</p>
        </div>
      </div>
    );
  }
}

export default News;
