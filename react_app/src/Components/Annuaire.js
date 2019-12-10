import React, {useEffect, useState} from 'react'
import Dialogue from "./Dialogue";


function Annuaire(props) {
    const handleClose = () => {
        setOpen(false);
    };
    var [selection, setSelection] = useState("");
    var [open, setOpen] = useState(false);
    useEffect(() => {
        console.log("test")
        if (open) {
            console.log("test")
            console.log({open} + " " + {selection})
        }
    })
    return (
        <>
            <div id={"annuaire"}>
                <h2> Contactez-nous !</h2>
                <div id={"annuaireSelectorWrapper"}>
                    <select id={"annuaireSelect"} onChange={e => changePole(e.target.value)} value={selection}>
                        <option value={""}>Choissisez un pôle à contacter....</option>
                        <option value={"PIC"}>Pôle Infrastructure Centrale</option>
                        <option value={"PIP"}>Pôle Infrastructure de Proximité</option>
                        <option value={"PAM"}>Pôle Application Métier</option>
                    </select>
                </div>
            </div>
            <Dialogue open={open} handleClose={handleClose} selection={selection}/>
        </>
    );

    function changePole(value) {
        console.log("On rentre ici ?")

        if (value == null) {
            console.log("Welp")
        } else {
            console.log("On a effectivement changer le pole :" + value)
            setSelection(previousPole => value);
            setOpen(open => true)
        }
    }
}

export default Annuaire