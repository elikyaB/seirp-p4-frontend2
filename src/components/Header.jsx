import { React } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = (props) => {

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <Link className="nav__logo" to="/">
            Notare!
          </Link>

          <li className="nav__list__item">
            <NavLink className="nav__link" to="/new">
              New
            </NavLink>
          </li>

          <li className="nav__list__item">
            <NavLink className="nav__link" to={props.randomNote()} >
              Random
            </NavLink>
          </li>

          <li className="nav__list__item">
            <div className="nav__link" onClick={props.deleteAll}>
              Delere!
            </div>
          </li>

          <div className="nav__button" onClick={props.toggleBurgerMenu}>
            <div className="nav__button__component"></div>
            <div className="nav__button__component"></div>
            <div className="nav__button__component"></div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
