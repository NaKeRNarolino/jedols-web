import React, { useState } from "react";
import {JButton} from './jButton';
import {GiHamburgerMenu} from 'react-icons/gi'
import {Popup} from './PopupWindow'

export function Header() {
    const [isVisibleBurger, setIsVisibleBurger] = useState(false);

    const BurgerMenuOCBtn = () => {
        if (isVisibleBurger == true) {
            setIsVisibleBurger(false)
        }
        if (isVisibleBurger == false) {
            setIsVisibleBurger(true)
        }
    }

    const BurgerMenu = (
        <ul className="burger">
            <li>
            <JButton text="JEDOLS" onClick={() => {
                console.log("WELL!")
            }}/>
            </li>
            <li>
            <JButton text="СКАЧИВАНИЯ" onClick={() => {
                console.log("WELL!")
            }}/>
            </li>
        </ul>
    )

    return (
        <header className="App-header">
            <Popup className="burger-menu-popup" content={BurgerMenu} isVisible={isVisibleBurger} CBtn={() => {setIsVisibleBurger(false)}}/>
            <GiHamburgerMenu className="burger-menu" onClick={BurgerMenuOCBtn}/>
            <JButton text="JEDOLS" onClick={() => {
                console.log("WELL!")
            }}/>
            <JButton text="СКАЧИВАНИЯ" onClick={() => {
                console.log("WELL!")
            }}/>
        </header>
    )
}