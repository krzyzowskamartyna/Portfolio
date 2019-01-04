import React, { Component } from "react";
import Icon from '@material-ui/core/Icon';
import '../css/start.css';
import '../css/about.css';


class About extends Component {
    render() {
        return (
            <div id="about">
                <div className="container">
                    <div className="header">
                        <h1><span className="title-sec">  Technologies</span> I use </h1>
                    </div>
                    <div className="list">
                        <div className="item">
                            <Icon className="fab fa-html5 "> </Icon>
                        </div>
                        <div className="item">
                            <Icon className="fab fa-css3-alt"> </Icon>
                        </div>
                        <div className="item">
                            <Icon className="fab fa-js"> </Icon>
                        </div>
                        <div className="item">
                            <Icon className="fab fa-react"> </Icon>
                        </div>
                        <div className="item">
                            <Icon className="fab fa-git"> </Icon>
                        </div>
                        <div className="item">
                            <Icon className="fab fa-sass"> </Icon>
                        </div>
                        <div className="item">
                            <Icon className="fab fa-node"> </Icon>
                        </div>
                        <div className="item">
                            <Icon className="fab fa-python"> </Icon>
                        </div>
                        <div className="item img">
                            <img src={require('../mongodb.svg')} alt="mongo"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default About;