import React, {useState} from 'react'
import {MdCancel} from "react-icons/md"

export default function Modal(props) {
    const [close, setClose] = useState(false)
    if (props.show && !close) {
        return (
            <>
                <MdCancel onClick={closeModal}/>
                <p> Test {props.message}</p>
            </>
        );
    } else {
        return null;
    }

    function closeModal() {
        setClose(close => !close)
    }



}
