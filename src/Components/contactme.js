import React, { Component } from 'react';
import {Cell, Grid} from "react-mdl";
import logo from "../images/contact_img.png";

class Contactme extends Component{
    render() {
        return(
            <div>
                <div style={{width: '100%', margin: 'auto'}}>
                    <Grid className="contact-grid">
                        <Cell col={6}>
                            <div className="banner-text-contact">
                                <img
                                    src={logo}
                                    alt="face"
                                    className="contact-img"
                                >
                                </img>

                            </div>
                        </Cell>
                        <Cell col={6}>
                            <div className="banner-text-contact">
                                <h1> About Me</h1>
                                <hr>
                                </hr>
                                <p> Hi! I am Nandhakumar Saravana. I'm currently a CS student pursuing a Master of Science degree at University of Southern California.<br />
                                    I am a passionate programmer who is always willing to learn and explore new technologies.<br />
                                    If you would like to work with me, please do not hesitate to contact me!
                                </p>
                                <div className="social-links">

                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/in/nandhakumar-saravana-853528188/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>

                                    {/* Github */}
                                    <a href="https://github.com/nandhakumar23" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>

                                    {/* Twitter */}
                                    <a href="https://twitter.com/cheesy_bytes_" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-twitter-square" aria-hidden="true" />
                                    </a>

                                </div>

                            </div>
                        </Cell>
                    </Grid>
                </div>
            </div>

        )
    }

}

export default Contactme;