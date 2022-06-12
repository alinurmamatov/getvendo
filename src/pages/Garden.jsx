import Header from "../components/Header";
import { LeftMenu, RightMenu, MainContainer, SubLinks, SubHeading, HeadingTitle } from "./styles/StyledPages";
import gardenNew from '../images/garden-new.jpeg';
import gardenSale from '../images/garden-sale.jpeg';

function Garden() {
  return (
    <>
        <Header/>
        <HeadingTitle>Garden</HeadingTitle>
        <MainContainer>
          <LeftMenu>
          <div>
              <SubHeading>Garden</SubHeading>
              <SubLinks to=''>Garden</SubLinks>
              <SubLinks to=''>Garden</SubLinks>
              <SubLinks to=''>Garden</SubLinks>
              <SubLinks to=''>Garden</SubLinks>
              <SubLinks to=''>Garden</SubLinks>
              <SubLinks to=''>Garden</SubLinks>
            </div>
            <div>
              <SubHeading>Garden</SubHeading>
              <SubLinks to=''>Garden</SubLinks>
              <SubLinks to=''>Garden</SubLinks>
              <SubLinks to=''>Garden</SubLinks>
              <SubLinks to=''>Garden</SubLinks>
              <SubLinks to=''>Garden</SubLinks>
              <SubLinks to=''>Garden</SubLinks>
            </div>
          </LeftMenu>
          <RightMenu>
          <div>
              <img src={gardenNew} alt='garden-new' style={{width: '250px', height: '300px', objectFit: 'cover'}}/>
            <SubHeading>NEW Collections</SubHeading>
            </div>
            <div>
                <img src={gardenSale} alt="garden-sale" style={{width: '250px', height: '300px', objectFit: 'cover'}}/>
              <SubHeading>SALE</SubHeading>
            </div>
          </RightMenu>
        </MainContainer>
    </>
  )
}

export default Garden;