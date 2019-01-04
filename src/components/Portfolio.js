import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../css/portfolio.css';

import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';


class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio">
                <div className="portfolio_container">
                    <div className="header">
                        <h1>My <span className="title-sec">projects</span></h1>
                    </div>
                    <div className="portfolio_list">
                        <div className="portfolio_item">
                            <Card className="portfolio_card" style={{ width: 350, minHeight: 370, padding: 1 }}>
                                <CardActionArea>
                                    <CardHeader
                                        title="Collect Your Notes App"
                                    />
                                    <CardMedia style={{ height: 0, paddingTop: '56%' }}
                                        image={require("../static/images/MakeNotes.PNG")}
                                        title="Collect Notes"
                                    />

                                    <CardContent>
                                        <Typography component="p">
                                            App build with <span className="title-sec">MongoDB </span>, <span className="title-sec">Express</span>, <span className="title-sec">NodeJS</span>, <span className="title-sec">React</span>
                                        </Typography>
                                    </CardContent>

                                </CardActionArea>
                            </Card>
                            <Card className="portfolio_card back" style={{ width: 350, minHeight: 370, padding: 1 }}>
                                <CardActions className="search">
                                    <Button className="btn"><a href="https://nameless-castle-80640.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-search"></i></a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="portfolio_item">
                            <Card className="portfolio_card" style={{
                                width: 350, minHeight: 370, padding: 1
                            }}><CardActionArea>
                                    < CardHeader
                                        title="Linux Website"
                                    />
                                    <CardMedia style={{ height: 0, paddingTop: '56%' }}
                                        image={require("../static/images/Linux.PNG")}
                                        title="Linux Website"
                                    />
                                    <CardContent>
                                        <Typography component="p">
                                            Website created for chemistry students as a teaching resource build with <span className="title-sec">React</span>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className="portfolio_card back" style={{ width: 350, minHeight: 370, padding: 1 }}>
                                <CardActions className="search">
                                    <Button className="btn"><a href="https://krzyzowskamartyna.github.io/Linux-website/" target="_blank" rel="noopener noreferrer"><i className="fas fa-search"></i></a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="portfolio_item">
                            <Card className="portfolio_card" style={{ width: 350, minHeight: 370, padding: 1 }}>
                                <CardActionArea>
                                    <CardHeader
                                        title="Research Website"
                                    />
                                    <CardMedia style={{ height: 0, paddingTop: '56%' }}
                                        image={require("../static/images/Research.PNG")}
                                        title="Research Website"
                                    />
                                    <CardContent>
                                        <Typography component="p">
                                            Research wesbite build with only <span className="title-sec">HTML</span> and <span className="title-sec">CSS (SASS)</span>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className="portfolio_card back" style={{ width: 350, minHeight: 370, padding: 1 }}>
                                <CardActions className="search">
                                    <Button className="btn"><a href="https://krzyzowskamartyna.github.io/ResearchWeb/dist/index.html" target="_blank" rel="noopener noreferrer"><i className="fas fa-search"></i></a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="portfolio_item">
                            <Card style={{ width: 350, minHeight: 370, padding: 1 }}>
                                <CardActionArea>
                                    <CardHeader
                                        title="Quiz App"
                                    />
                                    <CardMedia style={{ height: 0, paddingTop: '56%' }}
                                        image={require("../static/images/Quiz.PNG")}
                                        title="Quiz App"
                                    />
                                    <CardContent>
                                        <Typography component="p">
                                            Quiz app build with <span className="title-sec">VUE</span> framework and <span className="title-sec">Firebase</span>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>

                        <div className="portfolio_item">
                            <Card style={{ width: 350, minHeight: 370, padding: 1 }}>
                                <CardActionArea>
                                    <CardHeader
                                        title="Weather App"
                                    />
                                    <CardMedia style={{ height: 0, paddingTop: '56%' }}
                                        image={require("../static/images/Weather.PNG")}
                                        title="Weather App"
                                    />
                                    <CardContent>
                                        <Typography component="p">
                                            Fetching data from a weather API.
                            </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className="portfolio_card back" style={{ width: 350, minHeight: 370, padding: 1 }}>
                                <CardActions className="search">
                                    <Button className="btn"><a href="https://krzyzowskamartyna.github.io/Weather-app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-search"></i></a></Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="portfolio_item">
                            <Card style={{ width: 350, minHeight: 370, padding: 1 }}>
                                <CardActionArea>
                                    <CardHeader
                                        title="Portfolio project"
                                    />
                                    <CardMedia style={{ height: 0, paddingTop: '56%' }}
                                        image={require("../static/images/Portfolio.PNG")}
                                        title="Portfolio Project"
                                    />
                                    <CardContent>
                                        <Typography component="p">
                                            Portfolio project build with <span className="title-sec">React</span> and <span className="title-sec">Firebase</span>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className="portfolio_card back" style={{ width: 350, minHeight: 370, padding: 1 }}>
                                <CardActions className="search">
                                    <Button className="btn"><a href="/"><i className="fas fa-search"></i></a></Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Portfolio;