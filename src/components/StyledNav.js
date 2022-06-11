import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
 background-color: #14213d;
 height: 100px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 5vw;
 z-index: 10;

 @media screen and (max-width: 520px) {
    height: 10vh;
 }
`

export const SelectLanguage = styled.select`
    color: white;
    background-color: #14213d;
    border: none;

    &:hover {
        cursor: pointer
    }

    @media screen and (max-width: 520px) {
    display: none;
    }
`

export const NavLink = styled(Link)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 cursor: pointer;

 &.active {
    color: #f2cc8f;
 }
`

export const CartIcon = styled.div`
 color: white;
 display: none;
 padding: 0;
 margin: 0;
 @media screen and (max-width: 520px) {
   display: block;
   position: absolute;
   top: 0;
   right: -5px;
   transform: translate(-100%, 75%);
   font-size: 1.8rem;
   cursor: pointer;
 }
`

export const Bars = styled.div`
 color: white;
 display: none;
 padding: 0;
 margin: 0;

 @media screen and (max-width: 520px) {
    display: block;
    position: absolute;
    top: 0;
    left: 40px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
 }
`

export const NavMenu = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 white-space: nowrap;

 @media screen and (max-width: 520px) {
    display: none;
 }
`

export const NavLogo = styled.div`
  text-align: center;
  font-size: 30px;
  cursor: pointer;
  white-space: nowrap;

  @media screen and (max-width: 520px) {
   display: block;
   margin: auto;
   font-size: 1.3rem;
  }
`
export const SearchContainer = styled.div`
 background-color: #14213d;
 height: 50px;
 display: flex;
 align-items: center;
`

export const SearchInput = styled.input`
 display: block;
 width: 70vw;
 margin: auto;
 padding: 5px; 
 font-size: 1.2rem;
 border: none;
 border-radius: 4px;

 @media screen and (max-width: 520px) {
    width: 85vw;
    font-size: 1rem;
    padding: 2px;
 }
`

export const MainServices = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: #14213d;
 padding: 11px 0;

 @media screen and (max-width: 520px) {
  display: none;
}
`

export const ServiceLink = styled(Link)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 cursor: pointer;
 transition: border 2s;

 &.active {
    color: #f2cc8f;
    border-bottom: 1px solid #f2cc8f;
 }

 @media screen and (max-width: 520px) {
   display: none;
 }
`