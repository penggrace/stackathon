import React from "react";

class ColorAPI extends React.Component {
    componentDidMount() {
        var url = "http://colormind.io/api/";
        var data = {
            model: "default",
            input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"],
        };

        var http = new XMLHttpRequest();

        http.onreadystatechange = function () {
            if (http.readyState === 4 && http.status === 200) {
                var palette = JSON.parse(http.responseText).result;
                console.log(palette)
            }
        };

        http.open("POST", url, true);
        http.send(JSON.stringify(data));
    }
    render() {
      return (
          <div>
              <div className="palette" id="first"></div>
              <div className="palette" id="second"></div>
              <div className="palette" id="third"></div>
              <div className="palette" id="fourth"></div>
              <div className="palette" id="fifth"></div>
          </div>
      );
    }
}


export default ColorAPI;
