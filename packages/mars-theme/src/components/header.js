import React from "react";
import { connect, styled, keyframes } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import bulbImg from '../assets/1_bulb_on_d.png'

const Header = ({ state }) => {
  return (
    <>
       <Nav />
      <Container>
        <MobileMenu />
        <ImgWrapper>
        <Image src={bulbImg} alt="bulb-img"/>
        </ImgWrapper>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  /* width: 848px;
  max-width: 100%; */
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
 
`;

const flicker = keyframes`
0%{
  opacity: 1;
}
50%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`

const ImgWrapper = styled.div`
 display: flex;
 justify-content: center;
 animation: ${flicker} 2s linear infinite;
`

const Image = styled.img`
  width: 10%;
  padding: 5%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 5px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;