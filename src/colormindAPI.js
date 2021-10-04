import React from "react";
import "./App.css";

// class ColorAPI extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {}
//     }
//     componentDidMount() {
//         var url = "http://colormind.io/api/";
//         var data = {
//             model: "default",
//             input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"],
//         };

//         var http = new XMLHttpRequest();

//         http.onreadystatechange = function () {
//             if (http.readyState === 4 && http.status === 200) {
//               var palette = JSON.parse(http.responseText).result;
//             }
//         };

//         http.open("POST", url, true);
//         http.send(JSON.stringify(data));
//     }
//   render() {
//       console.log(this.state)
//         return (
//             <div>
//                 <div className="palette" id="first"></div>
//                 <div className="palette" id="second"></div>
//                 <div className="palette" id="third"></div>
//                 <div className="palette" id="fourth"></div>
//                 <div className="palette" id="fifth"></div>
//             </div>
//         );
//     }
// }


import Card from "./card";

const ColorAPI = ({ palette }) => {
    return (
        <div className="palette-container">
            <Card palette={palette[0]} className="palette" />
            <Card palette={palette[1]} className="palette" />
            <Card palette={palette[2]} className="palette" />
            <Card palette={palette[3]} className="palette" />
            <Card palette={palette[4]} className="palette" />
        </div>
    );
};

export default ColorAPI;
