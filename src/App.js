import "./App.css";
import ColorAPI from "./colormindAPI";

function App() {
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
                <ColorAPI />
            </div>
        </div>
    );
}

export default App;
