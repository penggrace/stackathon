import React from "react";
import "./App.css";


const Card = ({ palette }) => {
    let hex = "";
    const convert = (palette) => {
        palette.forEach((color) => {
            hex += color.toString(16);
        });
        return hex.toUpperCase();
    };
    hex = convert(palette);

    return (
        <div className="card-container">
            <div className="color" style={{ backgroundColor: `#${hex}` }}></div>
            <div>
                <div className="hex">#{hex}
                </div>
                <div
                    className="palette"
                    style={{ backgroundColor: `#${hex}` }}
                ></div>
            </div>
        </div>
    );
};

export default Card;
