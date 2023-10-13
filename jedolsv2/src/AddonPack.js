import React, { useState } from "react";
import { JButton } from "./jButton";
import { Popup } from "./PopupWindow";

export function AddonPack({icon, downloads, guides, name, description}) {
    const [isVisibleInstructions, setIsVisibleInstructions] = useState(false);
    const [isVisibleDownloads, setIsVisibleDownloads] = useState(false);
    const IstrOCBtn = () => {
        if (isVisibleInstructions == true) {
            setIsVisibleInstructions(false)
        }
        if (isVisibleInstructions == false) {
            setIsVisibleInstructions(true)
        }
        console.log(`Do smth ${isVisibleInstructions}`)
    }

    const DownOCBtn = () => {
        if (isVisibleDownloads == true) {
            setIsVisibleDownloads(false)
        }
        if (isVisibleDownloads == false) {
            setIsVisibleDownloads(true)
        }
        console.log(`Do smth ${isVisibleInstructions}`)
    }
    console.log(downloads)

    const flames_downloads = [
        {
          version:"1.20.1",
          link: "example1234"
        },
        {
          version:"1.20.30",
          link: "example12345"
        },
        {
          version:"1.20.0",
          link: "example12340"
        }
      ]

    const Downloads = (
        <ul>
            { downloads.map((element) => (
                <li>
                    <a href={element.link}>{element.version}: {element.link}</a>
                </li>        
            )) }    
        </ul>
    )

    return (
        <div className="addon-pack">
            <img src={icon}></img>
            <div className="addon-pack-button-part">
                <h2>{name}</h2>
                <h3>{description}</h3>
                <JButton text="Загрузить" onClick={DownOCBtn}/>
                <JButton text="Инструкции" onClick={IstrOCBtn}/>
                <Popup content={guides} isVisible={isVisibleInstructions} CBtn={() => {setIsVisibleInstructions(false)}}/>
                <Popup content={Downloads} isVisible={isVisibleDownloads} CBtn={() => {setIsVisibleDownloads(false)}}/>
            </div>
        </div>
    )
}