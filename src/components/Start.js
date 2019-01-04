import React, { Component } from "react";
import Particles from 'react-particles-js';

import Navbar from './Navbar';
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
                        <Button href="#about" variant="outlined" color="secondary" className="btn">
                            Show more  <Icon className='fas fa-arrow-right'></Icon>
                        </Button>
                    </div>
                    <Navbar />
                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 50,
                                    "density": {
                                        "enable": true,
                                        "value_area": 1400
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "opacity": 0.05
                                },
                                "move": {
                                    "direction": "right",
                                    "speed": 0.5
                                },
                                "size": {
                                    "value": 1
                                },
                                "opacity": {
                                    "anim": {
                                        "enable": true,
                                        "speed": 1,
                                        "opacity_min": 0.05
                                    }
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse",
                                    },
                                    "onclick": {
                                        "enable": true,
                                        "mode": "push",
                                    }
                                },
                                "modes": {
                                    "push": {
                                        "particles_nb": 1,
                                    }
                                }
                            },
                            "retina_detect": true
                        }} />
                </div>

            </div >
        )
    }
};

export default Start;