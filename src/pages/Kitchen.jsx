import Header from "../components/Header";
import { LeftMenu, RightMenu, MainContainer, SubLinks, SubHeading, HeadingTitle } from "./styles/StyledPages";
import kNew from '../images/kitchen-new.jpeg';
import kSale from '../images/kitchen-sale.jpeg';

function Kitchen() {
  return (
    <>
        <Header/>
        <HeadingTitle>Kitchen</HeadingTitle>
        <MainContainer>
          <LeftMenu>
          <div>
              <SubHeading>Kitchen</SubHeading>
                <SubLinks to=''>Kitchen</SubLinks>
                <SubLinks to=''>Kitchen</SubLinks>
                <SubLinks to=''>Kitchen</SubLinks>
                <SubLinks to=''>Kitchen</SubLinks>
                <SubLinks to=''>Kitchen</SubLinks>
                <SubLinks to=''>Kitchen</SubLinks>
            </div>
            <div>
              <SubHeading>Kitchen</SubHeading>
              <SubLinks to=''>Kitchen</SubLinks>
              <SubLinks to=''>Kitchen</SubLinks>
              <SubLinks to=''>Kitchen</SubLinks>
              <SubLinks to=''>Kitchen</SubLinks>
              <SubLinks to=''>Kitchen</SubLinks>
              <SubLinks to=''>Kitchen</SubLinks>
            </div>
          </LeftMenu>
          <RightMenu>
          <div>
              <img src={kNew} alt='kitchen-new' style={{width: '250px', height: '300px', objectFit: 'cover'}}/>
            <SubHeading>NEW Collections</SubHeading>
            </div>
            <div>
                <img src={kSale} alt="kitchen-sale" style={{width: '250px', height: '300px', objectFit: 'cover'}}/>
              <SubHeading>SALE</SubHeading>
            </div>
          </RightMenu>
        </MainContainer>
    </>
  )
}

export default Kitchen;