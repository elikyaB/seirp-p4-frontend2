import React, {Fragment, useState} from "react"
import Header from "./Header"
import BurgerMenu from "./BurgerMenu"

const HeaderNav = (props) =>{
    const [showBurgerMenu, setBurgerMenu] = useState(false)
    const closeBurgerMenu = () => {setBurgerMenu(false)}
    const toggleBurgerMenu = ()=>{setBurgerMenu(!showBurgerMenu)}

    return (
        <Fragment> 
            <Header 
                toggleBurgerMenu={toggleBurgerMenu} 
                notes={props.notes} 
                deleteAll={props.deleteAll}
                randomNote={props.randomNote}
            />
            <BurgerMenu 
                isOpen={showBurgerMenu} 
                closeBurgerMenu={closeBurgerMenu}
                notes={props.notes}
                deleteAll={props.deleteAll}
                randomNote={props.randomNote}
            />
        </Fragment>
    )
}

export default HeaderNav