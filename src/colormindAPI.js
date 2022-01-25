import React from "react";
import "./App.css";


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
