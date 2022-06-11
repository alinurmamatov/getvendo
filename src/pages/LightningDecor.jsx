import Header from "../components/Header";
import { LeftMenu, RightMenu, MainContainer } from "./styles/StyledLightningDecor";

function LightningDecor() {
  return (
    <>
      <Header/>
      <MainContainer>
        <LeftMenu>
          <h2 style={{margin: '2rem 3rem'}}>Lightning &amp; Decor</h2>
          
        </LeftMenu>
        <RightMenu>

        </RightMenu>
      </MainContainer>
    </>
  )
}

export default LightningDecor;