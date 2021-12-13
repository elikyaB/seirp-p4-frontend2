import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({isOpen,closeBurgerMenu, notes}) => {

    const styles = isOpen ? 'burgermenu burgermenu--open' : 'burgermenu burgermenu--closed';

    const list = notes.map((note) => {
      return (
        <li key={note.id} className="burgermenu__list__item" onClick={closeBurgerMenu}>
          <NavLink className="burgermenu__link" to={`/note/${note.id}`} >
            {note?.title}
          </NavLink>
        </li>
    )})

    return(
      <Fragment>
      {isOpen ? <div className="burgermenu__backdrop" onClick={closeBurgerMenu}></div> : <Fragment></Fragment> }

      <nav className={`${styles}`}>
        <ul className="burgermenu__list">
          <li className="burgermenu__list__item" onClick={closeBurgerMenu}>
            <NavLink className="burgermenu__link invert" to="/new">
              New Note
            </NavLink>
          </li>
          {list}
        </ul>
      </nav>

        </Fragment>
    );
};

export default BurgerMenu;