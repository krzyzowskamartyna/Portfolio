import React, { Component } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect, Text } from "react-konva";

import '../css/start.css';

class Start extends Component {
    render() {
        return (
            <div className="start">
                <div className="title">
                    <h1> Martyna <span className="title-sec">Krzyżowska</span></h1>
                    <h2>front end developer</h2>
                </div>
            </div>
        )
    }
};

export default Start;