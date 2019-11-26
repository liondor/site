import React, {useState} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import logo from '../Logo.png';
import {MdMenu, MdSearch} from 'react-icons/md'
import SideMenu from "./SideMenu";


let menu;
menu = (toggle) => {
    return (<>
        <div className={"golden_text menu"}>
            <Link className={"golden_text menu"} onClick={toggle} to="/Outils">
                Outils numériques & nos missions
            </Link>
        </div>
        <div>
            <Link className={"golden_text menu"} onClick={toggle} to="/about">Qui sommes-nous</Link>
        </div>
        <div>
            <Link className={"golden_text menu"} onClick={toggle} to="/projets">Nos projets</Link>
        </div>
    </>)
};

const SmallHeader = () => {
    const [hasClicked, setHasClicked] = useState(false)
    return (
        <Router>
            <div className={"header"}>
                <div className={"menu_disposition"}>
                    <MdMenu onClick={openModal}/>
                    {
                        /*
                 */}

                </div>

                <div className={"logo_container"}>
                    <Link to="/">
                        <img className={"logo"} src={logo}/>
                    </Link>
                </div>
                <div className={"searchbar_container"}>
                    <MdSearch/>
                </div>
            </div>
            <SideMenu show={hasClicked} toggle={openModal} message={""} content={menu}/>
            <hr/>

            {/*
             <Modal show={hasClicked} toggle={openModal} message={""}/>
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

        </Router>

    );
    // You can think of these components as "pages"
// in your app.
    function openModal() {
        setHasClicked(hasClicked => !hasClicked)
    }


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
                <h2>Outils numériques & nos missions</h2>
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
export default SmallHeader;