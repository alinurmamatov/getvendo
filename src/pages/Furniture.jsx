import Header from "../components/Header";
import { LeftMenu, RightMenu, MainContainer, SubLinks, SubHeading, HeadingTitle } from "./styles/StyledPages";
import furnitureImg from '../images/furniture.jpeg';

function Furniture() {
  return (
    <>
        <Header/>
        <HeadingTitle>Furniture</HeadingTitle>
        <MainContainer>
          <LeftMenu>
          <div>
              <SubHeading>Furniture</SubHeading>
              <SubLinks to=''>Furniture</SubLinks>
              <SubLinks to=''>Furniture</SubLinks>
              <SubLinks to=''>Furniture</SubLinks>
              <SubLinks to=''>Furniture</SubLinks>
              <SubLinks to=''>Furniture</SubLinks>
              <SubLinks to=''>Furniture</SubLinks>
            </div>
            <div>
              <SubHeading>Furniture</SubHeading>
              <SubLinks to=''>Furniture</SubLinks>
              <SubLinks to=''>Furniture</SubLinks>
              <SubLinks to=''>Furniture</SubLinks>
              <SubLinks to=''>Furniture</SubLinks>
              <SubLinks to=''>Furniture</SubLinks>
              <SubLinks to=''>Furniture</SubLinks>
            </div>
          </LeftMenu>
          <RightMenu>
          <div>
              <img src={furnitureImg} alt='furniture-new' style={{width: '100%', height: '300px', objectFit: 'cover'}}/>
            <SubHeading>NEW Collections</SubHeading>
            </div>
          </RightMenu>
        </MainContainer>
    </> 
  )
}

export default Furniture;