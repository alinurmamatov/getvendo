import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justif-content: space-between;
    align-items: center;
    height: 350px;

    @media screen and (max-width: 520px) {
        display: none;
    }
`

export const HeadingTitle = styled.h2`
    margin: 2rem 3rem;
`

export const LeftMenu = styled.div`
    display: flex;
    justify-content: space-around;
    flex: 45%;
    height: 100%;
    padding-left: 3rem;
`

export const RightMenu = styled.div`
    display: flex;
    justify-content: space-around;
    flex: 45%;
    height: 100%;
`

export const SubLinks = styled(Link)`
    display: block;
    text-decoration: none;
    color: #1b263b;
    margin: 15px 0;
`

export const SubHeading = styled.h3`
    margin-bottom: 30px;
`
