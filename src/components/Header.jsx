import { useState } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
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
            <Link to='/'>LOGO + BRAND</Link>
          </li>
          <li className="cart-icon">
            <ShoppingBasketIcon />
          </li>
          <li className="nav-main-menu">
            <Link to='/about' >About</Link>
            <Link to='/contact-us'>Contact Us</Link>
            <Link to='/my-profile'>
              <AccountCircleIcon/>
              My Profile
            </Link>
            <Link to='/cart'>
              <ShoppingBasketIcon/>
                0 items 
                <span style={{color: 'grey', fontWeight: '200'}}> $0.00</span>
            </Link>
          </li>
        </ul>
      </nav>
        <div className="search-container">
          <input type="text" className="search-input" placeholder='Search'/>
        </div>
        <div className={sidebar ? "nav-main-services-click" : "nav-main-services"}>
          <Link to='/rooms'>ROOMS</Link>
          <Link to='/furniture'>FURNITURE</Link>
          <Link to='/lightning-decor'>LIGHTNING&amp;DECOR</Link>
          <Link to='/kitchen'>KITCHEN</Link>
          <Link to='/bathandbody'>BATH&amp;BODY</Link>
          <Link to='/garden'>GARDEN</Link>
        </div>
    </>
  )
}

export default Header;