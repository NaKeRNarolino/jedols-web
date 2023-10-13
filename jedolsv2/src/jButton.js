import React from 'react'

export function JButton({text, onClick}) {
    return(
        <button className="jbutton" onClick={onClick}>
            <p>{text}</p>
        </button>
    )
}
