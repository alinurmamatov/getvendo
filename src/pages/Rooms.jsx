import Header from "../components/Header";
import { LeftMenu, RightMenu, MainContainer, SubLinks, SubHeading, HeadingTitle } from "./styles/StyledPages";
import roomsImg from '../images/home.jpeg';

function Rooms() {
  return (
    <>
        <Header/>
        <HeadingTitle>Rooms</HeadingTitle>
        <MainContainer>
          <LeftMenu>
          <div>
              <SubHeading>Rooms</SubHeading>
              <SubLinks to=''>Rooms</SubLinks>
              <SubLinks to=''>Rooms</SubLinks>
              <SubLinks to=''>Rooms</SubLinks>
              <SubLinks to=''>Rooms</SubLinks>
              <SubLinks to=''>Rooms</SubLinks>
              <SubLinks to=''>Rooms</SubLinks>
            </div>
            <div>
              <SubHeading>Rooms</SubHeading>
              <SubLinks to=''>Rooms</SubLinks>
              <SubLinks to=''>Rooms</SubLinks>
              <SubLinks to=''>Rooms</SubLinks>
              <SubLinks to=''>Rooms</SubLinks>
              <SubLinks to=''>Rooms</SubLinks>
              <SubLinks to=''>Rooms</SubLinks>
            </div>
          </LeftMenu>
          <RightMenu>
          <div>
              <img src={roomsImg} alt='kitchen-new' style={{width: '450px', height: '300px', objectFit: 'cover'}}/>
            <SubHeading>NEW Collections</SubHeading>
            </div>
          </RightMenu>
        </MainContainer>
    </>
  )
}

export default Rooms;