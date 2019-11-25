import React from 'react'

export default function Modal(props) {
    if (props.show) {
        return (
            <>
                Hello Modal
            </>
        );
    } else {
        return null;
    }


}
