import React from 'react';
import History from './history.js'
import Home from '../component/home'
import About from '../component/about'
import Contact from '../component/contact'
import Header from '../component/header'
import Footer from '../component/footer'
import LifeCycle from '../component/LifeCycle'
import ComponentState from '../component/componentState'


import Notfound from '../404'
import { Router, Switch, Route } from "react-router-dom";
import ScrollToTopRoute from './ScrollToTopRoute';

const Routers = () => {
    return (
        <Router history={History}>
            <ScrollToTopRoute>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/lifecycle">
                        <LifeCycle />
                    </Route>
                    <Route path="/component-state">
                        <ComponentState />
                    </Route>
                    <Route path="**">
                        <Notfound />
                    </Route>
                </Switch>
                <Footer />
            </ScrollToTopRoute>

        </Router>
    )
}

export default Routers;