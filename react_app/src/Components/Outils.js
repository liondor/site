import React from 'react'
import {IconContext} from "react-icons";
import {AiOutlineUser} from 'react-icons/ai'
import {Link} from "react-router-dom";


const Outil = () => {
    return (
        <Link className={"outil whiteText"} to={"/exempleOutil"}>
            <div className={"outilImageTitre"}>
                <div className={"outilImageContainer whiteText"}>

                    <IconContext.Provider value={{className: "outilIcone"}}>
                        <div>
                            <AiOutlineUser/>
                        </div>
                    </IconContext.Provider>
                </div>
                <div className={"outilTitre"}>
                    <h3 className={"bold majuscule"}> Compte utilisateur</h3>
                </div>
            </div>
            <div className={"outilDescription lessImportantText"}>
                <p>Accès aux différents services numériques</p>
            </div>

        </Link>
    );
}

export default Outil