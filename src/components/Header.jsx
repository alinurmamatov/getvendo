import { useState } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';


function Header() {
  const [language, setLanguage] = useState("EN");
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  }

  return (
    <>
      <div className='icons-container'>
        {
          sidebar ? (<CloseIcon className='close-icon' onClick={showSidebar}/>) : (<MenuIcon onClick={showSidebar}  className="menu-icon"/>)
        }
      </div>
      <nav className='nav-menu'>
        <select className='select-language'>
          <option value="EN" onChange={handleChange}>EN</option>
          <option value="PL" onChange={handleChange}>PL</option>
          <option value="UZ" onChange={handleChange}>UZ</option>
        </select>
        <ul className='nav-menu-items'>
          <li className="home-logo">
            <NavLink to='/' className={({isActive}) => isActive ? "home-logo-icon-active" : "home-logo-icon"} end>LOGO + BRAND</NavLink>
          </li>
          <li className="cart-icon">
            <ShoppingBasketIcon />
          </li>
          <li className="nav-main-menu">
            <NavLink to='/about' className={({isActive}) => isActive ? "nav-main-link-active" : "nav-main-link"}>About</NavLink>
            <NavLink to='/contact-us' className={({isActive}) => isActive ? "nav-main-link-active" : "nav-main-link"}>Contact Us</NavLink>
            <NavLink to='/my-profile' className={({isActive}) => isActive ? "nav-main-link-active" : "nav-main-link"}>
              <AccountCircleIcon/>
              My Profile
            </NavLink>
            <NavLink to='/cart' className={({isActive}) => isActive ? "nav-main-link-active" : "nav-main-link"}>
              <ShoppingBasketIcon/>
                0 items 
                <span style={{color: 'grey', fontWeight: '200'}}> $0.00</span>
            </NavLink>
          </li>
        </ul>
      </nav>
        <div className="search-container">
          <input type="text" className="search-input" placeholder='Search'/>
        </div>
        <div className={sidebar ? "nav-main-services-click" : "nav-main-services"}>
          <NavLink to='/rooms' className={({isActive}) => isActive ? "nav-services-active" : "nav-services"}>ROOMS</NavLink>
          <NavLink to='/furniture' className={({isActive}) => isActive ? "nav-services-active" : "nav-services"}>FURNITURE</NavLink>
          <NavLink to='/lightning-decor' className={({isActive}) => isActive ? "nav-services-active" : "nav-services"}>LIGHTNING&amp;DECOR</NavLink>
          <NavLink to='/kitchen' className={({isActive}) => isActive ? "nav-services-active" : "nav-services"}>KITCHEN</NavLink>
          <NavLink to='/bathandbody' className={({isActive}) => isActive ? "nav-services-active" : "nav-services"}>BATH&amp;BODY</NavLink>
          <NavLink to='/garden' className={({isActive}) => isActive ? "nav-services-active" : "nav-services"}>GARDEN</NavLink>
        </div>
    </>
  )
}

export default Header;