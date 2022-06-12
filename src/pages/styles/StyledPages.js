import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justif-content: space-between;
    align-items: center;
    height: 350px;
    box-sizing: border-box;

    @media screen and (max-width: 760px) {
        display: flex;
        flex-direction: column;
    }
`

export const HeadingTitle = styled.h2`
    margin: 2rem 3rem;

    @media screen and (max-width: 760px) {
        margin: 0;
        text-align: center;
        background-color: #2b2d42;
        padding: 0.5rem 0;
        color: white;
        border-top: 1px solid grey;
        font-size: 1.2rem;
    }
`

export const LeftMenu = styled.div`
    display: flex;
    justify-content: space-around;
    flex: 45%;
    height: 100%;
    padding-left: 3rem;

    @media screen and (max-width: 760px) {
        flex-direction: column;
        height: auto;
        padding: 0;
        text-align: center;
    }
`

export const RightMenu = styled.div`
    display: flex;
    justify-content: space-around;
    flex: 45%;
    height: 100%;

    @media screen and (max-width: 760px) {
        display: block;
        margin-top: 15px;
    }
`

export const SubLinks = styled(Link)`
    display: block;
    text-decoration: none;
    color: #1b263b;
    margin: 15px 0;

    @media screen and (max-width: 760px) {
        margin: 5px 0;
    }
`

export const SubHeading = styled.h3`
    margin-bottom: 30px;

    @media screen and (max-width: 760px) {
        margin: 10px 0;
    }
`