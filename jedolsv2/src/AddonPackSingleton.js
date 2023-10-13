import React, { useState } from "react";
import { AddonPack } from "./AddonPack";

export function AddonPackSingleton({icon, downloads, guides, name, description}) {
    const [isVisibleInstructions, setIsVisibleInstructions] = useState(false);
    const IstrOCBtn = () => {
        if (isVisibleInstructions == true) {
            setIsVisibleInstructions(false)
        }
        if (isVisibleInstructions == false) {
            setIsVisibleInstructions(true)
        }
        console.log(`Do smth ${isVisibleInstructions}`)
    }

    const IstrCBtn = () => {
        setIsVisibleInstructions(false)
    }
    console.log(`${IstrOCBtn}`)
    return (
        <AddonPack icon={icon} downloads={downloads} guides={guides} name={name} description={description} />        
    )
}