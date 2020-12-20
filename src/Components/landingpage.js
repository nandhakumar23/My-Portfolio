import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from '../images/Port_img.png'

class Landingpage extends Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={logo}
                            alt="avatar"
                            className="avatar-img"
                        >
                        </img>

                        <div className="banner-text">
                            <h1>Nandhakumar Saravana</h1>

                            <hr>
                            </hr>

                            <p>Skills: HTML/CSS  |  C/C++  |  JavaScript  |  React  |  Python  |  SQL  |  Snowflake  |  Java</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/nandhakumar-saravana-853528188/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/nandhakumar23" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>


                            </div>

                        </div>


                    </Cell>
                </Grid>
            </div>

        )
    }

}

export default Landingpage;