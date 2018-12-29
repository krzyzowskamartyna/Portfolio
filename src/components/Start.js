import React, { Component } from "react";
import Particles from 'react-particles-js';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import '../css/start.css';


class Start extends Component {
    render() {
        return (
            <div className="start">
                <div>

                    <div className="title">
                        <h1> Martyna <span className="title-sec">Krzyżowska</span></h1>
                        <h2>I'm a front end developer</h2>
                        <Button variant="outlined" color="secondary" className="btn">
                            Show more  <Icon className='fas fa-arrow-right'></Icon>
                        </Button>
                    </div>
                    <Particles />
                </div>

            </div >
        )
    }
};

export default Start;