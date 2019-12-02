import React from 'react'
import logo from '../Logo.png'

const Footer = () => {
    return (
        <>
            <footer className={"grid4"}>
                <div>
                    <img className={"footerLogo"} src={logo}/>
                </div>
                <div>
                    <div><h6 className={"goldenText"}> Guadeloupe</h6>
                        <p> 3ème étage bâtiment recherche, Campus de Fouillole, Fouillole, BP 250 97157
                            Pointe-à-Pitre</p>
                    </div>
                    <div><h6 className={"goldenText"}> Martinique</h6>
                        <p> 3ème étage bâtiment recherche, Campus de Fouillole, Fouillole, BP 250 97157
                            Pointe-à-Pitre</p>
                    </div>
                </div>
                <div>
                    <h4 className={"goldenText"}> Nos plateformes </h4>
                    <ul>
                        <li>
                            <a className={"lessImportantText"}> Lien exemple</a>
                        </li>
                        <li>
                            <a className={"lessImportantText"}> Lien exemple</a>
                        </li>
                        <li>
                            <a className={"lessImportantText"}> Lien exemple</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h4 className={"goldenText"}> Nos partenaires </h4>
                    <ul>
                        <li>
                            <a className={"lessImportantText"}> Lien exemple</a>
                        </li>
                        <li>
                            <a className={"lessImportantText"}> Lien exemple</a>
                        </li>
                        <li>
                            <a className={"lessImportantText"}> Lien exemple</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h4></h4>
                    <ul>

                    </ul>
                </div>
            </footer>
        </>);

}
export default Footer