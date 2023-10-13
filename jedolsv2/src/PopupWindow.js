import React, { useState } from "react";
import {AiFillCloseCircle, AiOutlineClose} from "react-icons/ai"

export function Popup({content, isVisible, CBtn, className}) {
    console.log(`${CBtn}`)
    const activePopup = "popup-window active " + className
    const popup = "popup-window " + className
    return (
        <div className={isVisible ? activePopup : popup}>
            <div onClick={CBtn} className="close-btn"><div><AiOutlineClose />Закрыть</div></div>      
            <br></br>
            {content}
        </div>
    )
}