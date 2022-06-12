import Header from "../components/Header";
import { LeftMenu, RightMenu, MainContainer, SubLinks, SubHeading, HeadingTitle } from "./styles/StyledPages";

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
              <img src="https://github.com/alinurmamatov/getvendo/blob/master/src/images/bath-body.jpeg?raw=true" alt='bath-and-body-new' style={{width: '100%', height: '300px', objectFit: 'cover'}}/>
            <SubHeading>NEW Collections</SubHeading>
            </div>
          </RightMenu>
        </MainContainer>
    </>
  )
}

export default BathBody;