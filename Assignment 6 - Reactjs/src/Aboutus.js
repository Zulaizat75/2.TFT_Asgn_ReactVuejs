import React from 'react'
import styled from 'styled-components';


// css using styled-components (*npm install styled-components)

const Back = styled.div`
    margin: 0;
`;

const Left = styled.div`
    width: 30%;
    margin-left: 15%;
    top: 60%;
    font-size: 1.5rem;
    line-height: 3rem;

    @media only screen and (max-width: 767px) {
        top: 78%;
    }
`;

const Right = styled.div`
    position: absolute;
    width: 50%;
    margin-left: 48%;
    top: 50%;
    font-size: 1.5rem;

    @media only screen and (max-width: 767px) {
        top: 85%;
    }
`;

const Middle = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    margin: 0;
    justify-content: center;

    @media only screen and (max-width: 767px) {
    width: 100%;
    height: 35vh;
`;

function Aboutus() {
  return (
    <div>
        <Back>
            <Left>
                <p style={{ fontSize: "1.5rem", color: "cadetblue", fontStyle: "bold"}}>ABOUT</p>
                <p style={{ fontSize: "2.5rem", fontStyle: "bold"}}>Our Experts Are The Finest</p>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.a</p>
                <p style={{ marginTop: "10px" }}>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
            </Left>
            <Middle>
                <img src='about3.png' alt='history' />
            </Middle>
            <Right>
            <img src='about2.png' alt='graph' style={{ width: "100%", height: "50vh", margin: 0, display: 'block' }} />
            </Right>
        </Back>

    </div>
  )
}

export default Aboutus