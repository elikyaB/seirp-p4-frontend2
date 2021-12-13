import React, {Fragment, useState} from "react";
import Header from "./Header";

// import burgermenu 
import BurgerMenu from "./BurgerMenu";

const HeaderNav = (props) =>{
    const [showBurgerMenu, setBurgerMenu] = useState(false);

    const closeBurgerMenu = () => {
        setBurgerMenu(false);
    }

    const toggleBurgerMenu = ()=>{
        setBurgerMenu(!showBurgerMenu);
    };

    return (
        <Fragment> 
            <Header toggleBurgerMenu={toggleBurgerMenu} />
            <BurgerMenu 
                isOpen={showBurgerMenu} 
                closeBurgerMenu={closeBurgerMenu}
                notes={props.notes}
            />
        </Fragment>
    );
};

export default HeaderNav;