import React from 'react'
import Carte from "./Cartes/Carte";
import Bouton from "./Bouton";
import Outil from "./Outils";
import PhotoText from "./PhotoText";


const Accueil = () => {
    return (
        <div id={"accueil"}>
            <h2 className={"titreSection"}> Conseils</h2>
            <div className="conteneur fillScreen">

                <Carte/>
                <Carte/>
                <Carte/>
            </div>
            <h2 className={"titreSection"}> Actualités</h2>
            <div className="conteneur fillScreen">
                <Carte/>
                <Carte/>
                <Carte/>
            </div>
            <Bouton marge={"30px"} contenu={"Plus d'actus"} type={"main"} arrow={true}/>
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
                    <Bouton marge={"30px"} contenu={"Plus d'outils"} type={"main"} arrow={true}/>
                </div>
            </div>
            <PhotoText/>
        </div>
    );
}
export default Accueil;