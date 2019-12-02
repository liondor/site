import React from 'react'
import user from './IMG/user.svg'

const Outil = () => {
    return (
        <a className={"conteneur outil"} href={"/"}>
            <div className={"outilImageTitre"}>
                <div className={"outilImageContainer"}>
                    <img className={"outilImage"} src={user}/>

                </div>
                <div className={"outilTitre"}>
                    <h3 className={"bold"}> Compte utilisateur</h3>
                </div>
            </div>
            <div className={"outilDescription lessImportantText"}>
                <p>Lorem ipsum dolor sit amet, sapien etiam.Lorem ipsum dolor sit amet, sapien etiam.Lorem ipsum
                    dolor sit amet, sapien etiam.</p>
            </div>

        </a>
    );
}

export default Outil