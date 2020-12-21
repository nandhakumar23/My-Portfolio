import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from "../images/Port_img.png";

class Resume extends Component{
    render() {
        return(
            <div>
                <Grid >
                    <Cell col={12}>

                        <h1 style={{paddingTop: '2em', textAlign: "center"}  }>Nandhakumar Saravana</h1>
                        <h4 style={{color: 'grey', textAlign: "center"}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid '}}/>
                        <h3 style={{textAlign: "left"}  }>EDUCATION</h3>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                            1. Moorpark College, CA - Aug 2017 thru Dec 2018 - Associate Degree with a GPA of 3.96. <br />
                        </p>
                        <p>
                            2. Bachelor of Science in Computer Science @ University of Southern California,
                            Los Angeles, CA - College Diploma in Progress <br />
                            Expected Undergrad Graduation May 2021. <br />

                        </p>
                        <p>

                            3. Master of Science in Computer Science @ University of Southern California, Los<br />
                            Angeles, CA - in Progress - Expected Masters Graduation May 2022<br />

                        </p>
                        <p>
                            Current USC GPA: 3.71 <br />
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h3 style={{textAlign: "left"}  }>SKILLS & EXPERIENCE</h3>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                            ● Proficient in C++, Python, Java, SQL and SNOWFLAKE. <br/>
                            ● Helped create python scripts to automate basic QA testing for newly created tables in snowflake. <br/>
                            ● Helped handle Business data requests and a majority of QA testing at Techstyle. <br/>
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h3 style={{textAlign: "left"}  }>EDUCATION</h3>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                        <h5>Email</h5>
                        <p>someone@example.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                </Grid>
            </div>

        )
    }

}

export default Resume;