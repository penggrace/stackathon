import "./App.css";
import React, { useState } from "react";
import ColorAPI from "./colormindAPI";
import axios from "axios";

function App() {
  const [palette, setPalette] = useState([
      [54, 38, 39],
      [191, 78, 75],
      [245, 166, 159],
      [223, 184, 147],
      [96, 89, 85],
  ]);

  const onClick = async () => {
      const url =
          "http://colormind.io/api/";
      const data = {
          model: "default",
      };
      const headers = {
          "Content-Type": "text/plain",
      };
      const colorPalette = await axios
          .post(url, data, { headers })
          .then((res) => res.data.result); // array of 5
      console.log(colorPalette);
      setPalette(colorPalette);
  };
    return (
        <div className="App">
            <div>
                <header className="App-header">
                    <h1>Machine-Learning Color Palette Generator</h1>
                </header>
            </div>
            <div>
                <hr />
                <button className="star" id="star1">
                    ★
                </button>
                <button className="star" id="star2">
                    ★
                </button>
                <button className="star" id="star3">
                    ★
                </button>
                <button className="star" id="star4">
                    ★
                </button>
                <button className="star" id="star5">
                    ★
                </button>
                <hr />
            </div>
            <div>
                <button onClick={onClick}>Get new palette</button>
            </div>
            <div>
                <ColorAPI palette={palette} />
            </div>
        </div>
    );
}

export default App;
