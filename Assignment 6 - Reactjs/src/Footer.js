import React from 'react';
import styled from 'styled-components';

// Footer css using styled-components (*npm install styled-components)
const StyledFooter = styled.footer`
  background-color: cadetblue;
  color: beige;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
    text-align: center;

    & > * {
      margin-bottom: 0.5rem;
    }
  }
`;


const FooterText = styled.p`
  margin: 0;  
`;

const LeftFoot = styled(FooterText)`
  text-align: left;
  margin-left: 5rem;
  font-size: 18px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const RightFoot = styled(FooterText)`
  color: lightgrey;
  margin-right: 10rem;
  font-size: 20px;
  cursor: pointer;
  a {
    color: lightgreen;
    text-decoration: none;
    &:hover {
      color: beige;
    }
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

// Footer
function Footer() {
  return (
    <div>
      <StyledFooter>
        <LeftFoot>©2023 GamDeve Testified Sdn Bhd @ All rights reserved.</LeftFoot>
        <RightFoot>Powered by<a href="https://teachable.com/?src=school_footer" target="_blank"> teach:able</a></RightFoot>
      </StyledFooter>
    </div>
  );
}

export default Footer