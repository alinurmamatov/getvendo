import Header from "../components/Header";
import { HeadingTitle, LeftMenu, RightMenu, MainContainer, SubLinks, SubHeading } from "./styles/StyledPages";
import ldNew from '../images/lightning-decor-new.jpeg';
import ldSale from '../images/lightning-decor-sale.jpeg';

function LightningDecor() {
  return (
    <>
      <Header/>
      <HeadingTitle>Lightning &amp; Decor</HeadingTitle>
      <MainContainer>
          <LeftMenu>
            <div>
              <SubHeading>Lightning</SubHeading>
                <SubLinks to='table-lamps'>Table Lamps</SubLinks>
                <SubLinks to='floor-lamps'>Floor Lamps</SubLinks>
                <SubLinks to='ceiling-lamps'>Ceiling Lamps</SubLinks>
                <SubLinks to='lampshades'>Lampshades</SubLinks>
                <SubLinks to='inteligent-lightning'>Inteligent lightning</SubLinks>
            </div>
            <div>
              <SubHeading>Decor</SubHeading>
              <SubLinks to=''>Art &amp; Figuratines</SubLinks>
              <SubLinks to=''>Candles</SubLinks>
              <SubLinks to=''>Decorative Pillows</SubLinks>
              <SubLinks to=''>Frames &amp; Pictures</SubLinks>
              <SubLinks to=''>Mirrors</SubLinks>
              <SubLinks to=''>Rugs</SubLinks>
            </div>
            <div>
              <SubHeading>Plants</SubHeading>
              <SubLinks to=''>Artifical Plants</SubLinks>
              <SubLinks to=''>Potted Plants</SubLinks>
              <SubLinks to=''>Dried Flowers</SubLinks>
              <SubLinks to=''>Flower Pots</SubLinks>
            </div>
          </LeftMenu>
          <RightMenu>
            <div>
              <img src={ldNew} alt='lightning-decor-new' style={{width: '250px', height: '300px', objectFit: 'cover'}}/>
            <SubHeading>NEW Collections</SubHeading>
            </div>
            <div>
                <img src={ldSale} alt="lightning-decor-sale" style={{width: '250px', height: '300px', objectFit: 'cover'}}/>
              <SubHeading>SALE</SubHeading>
            </div>
          </RightMenu>
      </MainContainer>
    </>
  )
}

export default LightningDecor;