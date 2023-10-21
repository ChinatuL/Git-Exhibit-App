import logo from "../assets/Icons/Logo.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <header className='header'>
            <nav className='nav flex-row'>
                <div className='nav__logo flex-row'>
                    <img src={logo} alt='Logo' /> <span>-</span>{" "}
                    <span>Exhibit</span>
                </div>
                <ul className='nav__list flex-row'>
                    <li className='nav__item'>
                        <NavLink to='/' className='nav__link'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to='/errortest' className='nav__link'>
                            Error
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Navbar;
