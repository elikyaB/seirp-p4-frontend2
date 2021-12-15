import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({isOpen,closeBurgerMenu, notes, deleteAll, randomNote}) => {

    const styles = isOpen ? 'burgermenu burgermenu--open' : 'burgermenu burgermenu--closed';

    const list = notes.map((note) => {
      return (
        <li key={note.id} className="burgermenu__list__item" onClick={closeBurgerMenu}>
          <NavLink className="burgermenu__link" to={`/note/${note.id}`} >
            {note?.title}
          </NavLink>
          {/* <div className="wrapper">
            <div className="modal">
              {note?.body}
            </div>
          </div> */}
        </li>
    )})

    return(
      <Fragment>
      {isOpen ? <div onClick={closeBurgerMenu}></div> : <Fragment></Fragment> }
      {/* <div className="wrapper"> */}
      <nav className={`${styles}`}>
        <ul className="burgermenu__list">
          <li className="burgermenu__list__item" onClick={closeBurgerMenu}>
            <NavLink className="burgermenu__link invert" to="/new">
              New
            </NavLink>
            <NavLink className="burgermenu__link invert" to={randomNote()}>
              Random
            </NavLink>
            <div className="burgermenu__link invert" onClick={deleteAll}>
              Delere!
            </div>
          </li>
          {list}
        </ul>
      </nav>
      {/* </div> */}

        </Fragment>
    );
};

export default BurgerMenu;