import React from 'react'
import Carte from "./Cartes/Carte";
import Bouton from "./Bouton";
import Outil from "./Outils";

const Accueil = () => {
    return (
        <div id={"accueil"}>
            <div className="conteneur fillScreen">
                <Carte/>
                <Carte/>
                <Carte/>
                <Carte/>
                <Carte/>
                <Carte/>
            </div>
            <Bouton marge={"30px"} contenu={"Plus d'actus"}/>
            <div className={"accueilOutilsWrapper whiteText"}>
                <div className={"greyBackground"}/>
                <div className={"accueilOutilsSubWrapper"}>
                    <h2 className={"titreSection "}>Outils numériques populaires </h2>
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
        </div>
    );
}
export default Accueil;