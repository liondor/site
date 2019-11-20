import React from 'react';
import './Carte.css'
import univ from './IMG/univ.jpg'

export default class Carte extends React.Component {
    render() {
        return (
            <div className={"Carte"}>
                <img alt={"Photo de l'université"} src={univ}/>
                <h4> Découvrez les outils numériques de l'université</h4>
                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
                    impression.</p>
            </div>
        );
    }
}