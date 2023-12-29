import React from 'react'
import styled from 'styled-components';

// css using styled-components (*npm install styled-components)
const Client = styled.div`
  background-color: white;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px; /* Adjust the styling for smaller screens */
  }
`;

const Heading = styled.p`
  font-size: 1.8rem;
  color: cadetblue;
  font-weight: bold;

  @media (min-width: 768px) {
    flex-direction: row; /* Change layout back to row on larger screens */
  }
`;

const SubHeading = styled.p`
  font-size: 2.5rem;
`;

const Icon = styled.a`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const IconItem = styled.div`
  text-align: center;
  flex: 1;
  color: black;
  font-size: 1.5rem;
`;

const Back = styled.div`
    background-color: beige;
    text-align: center;

    @media (max-width: 768px) {
        padding: 20px; /* Adjust the styling for smaller screens */
      }
`;

const Back2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-direction: column; /* Change layout to column on smaller screens */
        width: 100%;
        text-align: center;
        justify-content: center;
      }
`;

function Services() {
  return (
    <div>
        <Client>
            <Heading>OUR SERVICES</Heading>
            <SubHeading>We Take Gaming To The Next Level</SubHeading>
            <Icon>
                <IconItem className='icon1'>
                    <img src='icon1.png' alt='icon1' style={{width:"35%",margin:"0 ",height:"100px"}}/>
                    <p style={{ fontSize: '2rem'}} > Business Plan</p>
                    <p style={{ fontSize: '1.5rem'}}> We turn your gaming into profits</p>
                </IconItem>
                <IconItem className='icon2'>
                    <img src='icon2.png' alt='icon2' style={{width:"35%", margin:"0 ",height:"100px"}}/>
                    <p style={{ fontSize: '2rem'}}> Automated Process</p>
                    <p style={{ fontSize: '1.5rem'}}> We make your profits automated</p>
                </IconItem>
                <IconItem className='icon3'>
                    <img src='icon3.jpg' alt='icon3' style={{width:"35%",margin:"0 1rem",height:"100px"}}/>
                    <p style={{ fontSize: '2rem'}}> Business Optimisation</p>
                    <p style={{ fontSize: '1.5rem'}}> We provide solutions to optimised your gaming business</p>
                </IconItem>
            </Icon>
        </Client>
        <Back>
            <p style={{ fontSize: "2rem", color: "cadetblue", fontWeight: "bold", height: '5vh', paddingTop: '2rem'}}>We're Good With Numbers</p>
            <Back2>
                <IconItem className='num1'>
                    <p style={{ fontSize: "5rem", fontWeight: "bold", margin: 0, width: '150%'}}>8</p>
                    <p style={{ height: '5vh', width: '150%'}}>Years of Experience</p>
                </IconItem>
                <IconItem className='num2'>
                    <p style={{ fontSize: "5rem", fontWeight: "bold", margin: 0, width: '120%'}}>20</p>
                    <p style={{ height: '5vh', width: '120%'}}>Qualified Experts</p>
                </IconItem>
                <IconItem className='num3'>
                    <p style={{ fontSize: "5rem", fontWeight: "bold", margin: 0, width: '80%'}}>196</p>
                    <p style={{ height: '5vh', width: '80%'}}>Happy Clients</p>
                </IconItem>
                <IconItem className='num4'>
                    <p style={{ fontSize: "5rem", fontWeight: "bold", margin: 0, width: '40%'}}>7</p>
                    <p style={{ height: '5vh', width: '40%'}}>Intl. Partners</p>
                </IconItem>
            </Back2>
        </Back>

    </div>
  )
}

export default Services