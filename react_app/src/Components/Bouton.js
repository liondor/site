import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

const styleBouton = {
    backgroundColor: '#313638',
    'color': 'white',
    'height': 'fit-content',
    'width': 'fit-content',
    'padding': '1em',
    borderRadius: '10px',
    'border': 'none',
    boxShadow: '0 2px 6px 0 hsla(0,0%,0%, 0.2) '
}
const Bouton = () => {
    return (
        <button style={styleBouton}>

            Plus d'actu ! <div className={"arrowIcon"}> {FaArrowRight}</div>
        </button>);
}
export default Bouton