import React from 'react'

import Landingpage from "./landingpage";
import Resume from "./resume";
import Contactme from "./contactme";
import Projects from "./projects";
import AboutMe from "./AboutMe";

import {Switch, Route } from 'react-router-dom'

const Main = () => (
    <Switch>
        <Route exact path="/" component={ Landingpage} />
        <Route path="/contact" component={Contactme} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/aboutme" component={AboutMe} />
    </Switch>
)

export default Main;