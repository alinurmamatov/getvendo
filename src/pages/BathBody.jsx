import Header from "../components/Header";
import { LeftMenu, RightMenu, MainContainer, SubLinks, SubHeading, HeadingTitle } from "./styles/StyledPages";
import bathBody from '../images/bath-body.jpeg'

function BathBody() {
  return (
    <>
        <Header/>
        <HeadingTitle>Bath &amp; Body</HeadingTitle>
        <MainContainer>
          <LeftMenu>
          <div>
              <SubHeading>Bath &amp; Body</SubHeading>
              <SubLinks to=''>Bath &amp; Body</SubLinks>
              <SubLinks to=''>Bath &amp; Body</SubLinks>
              <SubLinks to=''>Bath &amp; Body</SubLinks>
              <SubLinks to=''>Bath &amp; Body</SubLinks>
              <SubLinks to=''>Bath &amp; Body</SubLinks>
              <SubLinks to=''>Bath &amp; Body</SubLinks>
            </div>
            <div>
              <SubHeading>Bath &amp; Body</SubHeading>
              <SubLinks to=''>Bath &amp; Body</SubLinks>
              <SubLinks to=''>Bath &amp; Body</SubLinks>
              <SubLinks to=''>Bath &amp; Body</SubLinks>
              <SubLinks to=''>Bath &amp; Body</SubLinks>
              <SubLinks to=''>Bath &amp; Body</SubLinks>
              <SubLinks to=''>Bath &amp; Body</SubLinks>
            </div>
          </LeftMenu>
          <RightMenu>
          <div>
              <img src={bathBody} alt='kitchen-new' style={{width: '450px', height: '300px', objectFit: 'cover'}}/>
            <SubHeading>NEW Collections</SubHeading>
            </div>
          </RightMenu>
        </MainContainer>
    </>
  )
}

export default BathBody