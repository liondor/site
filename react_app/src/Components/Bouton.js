import React from 'react'
import {FaArrowRight} from 'react-icons/fa'


const Bouton = (props) => {
    return (
        <button style={{marginTop: props.marge, marginBottom: props.marge}}
                className={" effect effect-1 boutonActionPricipal  inBetween"}>
            {props.contenu}
            <div className={"arrowIcon"}><FaArrowRight/></div>
        </button>);
}
export default Bouton