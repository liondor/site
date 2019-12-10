import React from 'react'
import {FaArrowRight} from 'react-icons/fa'


const Bouton = (props) => {
    var classeBouton = "";
    if (props.arrow) {
        classeBouton += " effect effect-1 "
    }
    if (props.type === "main") {
        classeBouton += " boutonActionPrincipal "
    }
    return (
        <button style={{marginTop: props.marge, marginBottom: props.marge}}
                className={classeBouton + "inBetween"} id={props.id}>
            {props.contenu}
            <div className={"arrowIcon"}><FaArrowRight/></div>
        </button>);

}
export default Bouton