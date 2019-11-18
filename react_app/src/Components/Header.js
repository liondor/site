import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import logo from './Logo.png';

export default class Header extends React.Component {

    render() {
        return (
            <Router>
                <div className={"top_of_header"}>
                    <div className={"logo_container"}>
                        <Link to="/"><img className={"logo"} src={logo}/></Link>
                    </div>
                    <div className={"searchbar_container"}>
                        <input type={"text"} placeholder={"Rechercher..."}/>
                        <input type={"submit"}/>
                    </div>
                </div>
                <div>

                    <ul>
                        <li>
                            <Link to="/Outils">Outils informatiques & nos missions</Link>
                        </li>
                        <li>
                            <Link to="/about">Qui sommes-nous</Link>
                        </li>
                        <li>
                            <Link to="/projets">Nos projets</Link>
                        </li>
                    </ul>

                    <hr/>

                    {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/outils">
                            <Outils/>
                        </Route>
                        <Route path="/projets">
                            <Projets/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
        // You can think of these components as "pages"
// in your app.

        function Home() {
            return (
                <div>
                    <h2>Home</h2>
                </div>
            );
        }

        function About() {
            return (
                <div>
                    <h2>About</h2>
                </div>
            );
        }

        function Outils() {
            return (
                <div>
                    <h2>Outils informatiques & nos missions</h2>
                </div>
            );
        }

        function Projets() {
            return (
                <div>
                    <h2>Nos projets</h2>
                </div>
            );
        }

    }

}