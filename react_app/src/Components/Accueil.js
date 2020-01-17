import React from 'react'
import Carte from "./Cartes/Carte";
import Bouton from "./Bouton";
import PhotoText from "./PhotoText";
import Liste from "./Liste";

const Accueil = (props) => {
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
                    <div className={"accueilOutils"}>
                        <Liste token={props.token} limit={3} type={'article'}/>
                    </div>
                    <Bouton marge={"30px"} contenu={"Plus d'outils"} type={"main"} arrow={true}/>
                </div>
            </div>
            <PhotoText/>
        </div>
    );
}
export default Accueil;