import React, { Component } from "react";
import Icon from '@material-ui/core/Icon';
import '../css/about.css';


class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="title">
                        <h2>  Technologies I know </h2>
                    </div>
                    <div className="list">
                        <div className="item">
                            <Icon className="fab fa-html5"> </Icon>
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
                            <Icon className="fab fa-gulp"> </Icon>
                        </div>
                        <div className="item">
                            <Icon className="fab fa-python"> </Icon>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default About;