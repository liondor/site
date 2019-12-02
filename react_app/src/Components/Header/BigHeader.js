import React from 'react';
import {Link} from "react-router-dom";
import logo from '../Logo.png';
import {MdSearch} from 'react-icons/md'

export default class BigHeader extends React.Component {

    render() {
        return (
            <>
                <div className={"header"} id={"header"}>
                    <div className={"logo_container"}>
                        <Link to="/"><img className={"logo"} src={logo}/></Link>
                    </div>
                    <div className={"searchbar_container"}>
                        <input type={"text"} placeholder={"Rechercher..."}/>
                        <label className={'headerSearchSubmitWrapper'}>
                            <input type={"submit"} className={'headerSearchSubmit'}/>
                            <MdSearch/>
                        </label>
                    </div>
                    <div className={"menu_disposition"}>
                        <div className={"grid3 gridCenter  majuscule"}>
                            <div style={{position: "relative"}}>
                                <Link className={"menu goldenHover"} to="/Outils">
                                    Outils numériques & nos missions
                                </Link>
                            </div>
                            <div style={{position: "relative"}}>
                                <Link className={" menu goldenHover "} to="/about">Qui sommes-nous</Link>
                            </div>
                            <div style={{position: "relative"}}>
                                <Link className={" menu goldenHover"} to="/projets">Nos projets</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>

                {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}

            </>

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

}