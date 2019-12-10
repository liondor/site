import React from 'react'
import Annuaire from "./Annuaire";
import Bouton from "./Bouton";

const Contact = () => {
    return (
        <div id={"contact"}>
            <form id={"formulaire"}>
                <label for={"nom"}>Nom </label>
                <input type={"text"} name={"nom"} placeholder={"Nom"}/>
                <label for={"prenom"}>Prénom </label>
                <input type={"text"} name={"prenom"} placeholder={"Prénom"}/>
                <label for={"mail"}>Email </label>
                <input type={"mail"} name={"mail"} placeholder={"Email"}/>
                <label for={"sujet"}>Sujet </label>
                <input type={"text"} name={"sujet"} placeholder={"Sujet"}/>
                <label for={"description"}> Quel problème essayez-vous de résoudre ?
                </label>
                <input id={"description"} type={"text"} name={"description"}
                       placeholder={"Décrivez votre problème...."}/>
                <Bouton id={"formButton"} contenu={"Valider"}> </Bouton>
            </form>
            <Annuaire/>


        </div>
    );
}

export default Contact