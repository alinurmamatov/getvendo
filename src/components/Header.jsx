import { useState } from 'react';
import {Nav, NavLink, NavMenu, Bars, NavLogo, SearchContainer, SearchInput, SelectLanguage, MainServices, ServiceLink} from './StyledNav';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Header() {
  const [language, setLanguage] = useState("EN");

  const handleChange = (e) => {
    setLanguage(e.target.value);
  }

  return (
    <>
      <Nav>
          <SelectLanguage>
            <option value="EN" onChange={handleChange}>EN</option>
            <option value="PL" onChange={handleChange}>PL</option>
            <option value="UZ" onChange={handleChange}>UZ</option>
          </SelectLanguage>
          <Bars>
            <MenuIcon/>
          </Bars>
          <NavMenu>
            <NavLogo>
              <NavLink to='/'>
                LOGO
              </NavLink>
            </NavLogo>
            <NavLink to='/about'>
              About
            </NavLink>
            <NavLink to='/contact-us'>
              Contact Us
            </NavLink>
            <NavLink to='/my-profile'>
              <AccountCircleIcon/>
              My Profile
            </NavLink>
            <NavLink to='/cart'>
              <ShoppingBasketIcon/>
              0 items 
              <span style={{color: 'grey', fontWeight: '200'}}> $0.00</span>
            </NavLink>
          </NavMenu>
      </Nav>
      <SearchContainer>
        <SearchInput placeholder='Search'/>
      </SearchContainer>
      <MainServices>
        <ServiceLink to='/rooms'>ROOMS</ServiceLink>
        <ServiceLink to='/furniture'>FURNITURE</ServiceLink>
        <ServiceLink to='/lightning-decor'>LIGHTNING&amp;DECOR</ServiceLink>
        <ServiceLink to='/kitchen'>KITCHEN</ServiceLink>
        <ServiceLink to='/bathandbody'>BATH&amp;BODY</ServiceLink>
        <ServiceLink to='/garden'>GARDEN</ServiceLink>
      </MainServices>
    </>
  )
}

export default Header;