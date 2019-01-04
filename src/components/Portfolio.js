import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../css/portfolio.css';


const Portfolio = () => (
    <div id="portfolio">
        <div className="portfolio_container">
            <div className="header">
                <h1>My <span className="title-sec">projects</span></h1>
            </div>
            <div className="portfolio_list">
                <div className="portfolio_item">
                    <Card style={{ width: 350, minHeight: 370, padding: 1 }}>
                        <CardHeader
                            title="Collect Your Notes App"
                        />
                        <CardMedia style={{ height: 0, paddingTop: '56%' }}
                            image={require("../static/images/MakeNotes.PNG")}
                            title="Collect Notes"
                        />
                        <CardContent>
                            <Typography component="p">
                                App build with <span className="title-sec">MongoDB </span>, <span className="title-sec">Express</span>, <span className="title-sec">NodeJS</span> and <span className="title-sec">React</span>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className="portfolio_item">
                    <Card style={{
                        width: 350, minHeight: 370, padding: 1
                    }}>
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
                    </Card>
                </div>
                <div className="portfolio_item">
                    <Card style={{ width: 350, minHeight: 370, padding: 1 }}>
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
                    </Card>
                </div>
                <div className="portfolio_item">
                    <Card style={{ width: 350, minHeight: 370, padding: 1 }}>
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
                    </Card>
                </div>

                <div className="portfolio_item">
                    <Card style={{ width: 350, minHeight: 370, padding: 1 }}>
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
                    </Card>
                </div>
                <div className="portfolio_item">
                    <Card style={{ width: 350, minHeight: 370, padding: 1 }}>
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
                    </Card>
                </div>
            </div>
        </div>
    </div>

)
export default Portfolio;