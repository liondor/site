import React from 'react'
import Carte from "./Cartes/Carte";
import Bouton from "./Bouton";
import Outil from "./Outils";

const Accueil = () => {
    return (
        <>
            <div className="conteneur">

                <Carte/>
                <Carte/>
                <Carte/>
                <Carte/>
                <Carte/>
                <Carte/>
            </div>
            <Bouton marge={"30px"} contenu={"Plus d'actus"}/>
            <div className={"accueilOutilsWrapper"}>
                <div className={"greyBackground"}/>
                <div className={"accueilOutilsSubWrapper"}>
                    <h2>Outils numériques populaires </h2>
                    <div className={"accueilOutils conteneur"}>
                        <Outil/>
                        <Outil/>
                        <Outil/>
                        <Outil/>
                        <Outil/>
                    </div>
                    <Bouton marge={"30px"} contenu={"Plus d'outils"}/>
                </div>
            </div>
        </>
    );
}
export default Accueil;