import React from 'react';
import './Carte2.css'
import univ from '../IMG/univ.jpg'

export default class Carte extends React.Component {
    render() {
        return (
            <div className={"carte"}>
                <img alt={"Photo de l'université"} src={univ}/>
                <div className={"tag"}>
                    <h5 className={"goldenText "}> Etudiants Visiteurs Personnels</h5>
                </div>
                <div className={"titre_carte"}>
                    <h4> Découvrez les outils numériques de l'université</h4>
                </div>
            </div>
        );
    }
}