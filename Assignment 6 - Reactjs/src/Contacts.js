import React from 'react';
import styled from 'styled-components';
import './Contacts.css'

// css using styled-components (*npm install styled-components)
const Client = styled.div`
  background-color: white;
  margin: 0;
  text-align: center;
  font-size: 1.5rem;
`;

const Logo = styled.a`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

const Back = styled.div`
    margin: 0;
`;

const Left = styled.div`
    position: absolute;
    width: 40%;
    margin-left: 15%;
    top: 60%;
    font-size: 1.5rem;

    @media only screen and (max-width: 767px) {
        top: 78%;
    }
`;

const Right = styled.div`
    position: absolute;
    width: 50%;
    margin-left: 55%;
    top: 70%;
    font-size: 1.5rem;

    @media only screen and (max-width: 767px) {
        top: 85%;
    }
`;

// function to display contacts page
function Contacts() {
  return (
    <div>
        <Client>
            <p>Clients We've Worked With</p>
            <Logo>
            <img src='logo1.png' alt='logo1' style={{width:"90px",margin:"0 1rem",height:"90px"}}/>
            <img src='logo2.jpg' alt='logo2' style={{width:"90px",margin:"10px",height:"66px"}}/>
            <img src='logo3.png' alt='logo3' style={{width:"120px",margin:"12px",height:"70px"}}/>
            <img src='logo4.jpg' alt='logo4' style={{width:"125px",margin:"5px 0px",height:"85px"}}/>
            </Logo>
        </Client>
        <Back>
            <img src='back.jpg' alt='nav' style={{ width: "100%", height: "600px", margin: 0, display: 'block' }} />
            <Left>
                <p style={{ fontSize: "2rem", color: "cadetblue", fontStyle: "bold"}}>CONTACT</p>
                <p style={{ fontSize: "2.5rem", fontStyle: "bold"}}>Let's Work Together</p>
                <p>Avenue K, Tmn Bunga Mawar, Selangor, Malaysia</p>
                <p style={{ marginTop: "10px" }}>info@gamdeve.com</p>
                <p>Tel: 012-3458888</p>
                <img alt="LinkedIn" style={{width: "30px", height: "30px", objectFit: "cover", cursor: "pointer"}} src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png"></img>
                <img alt="Facebook" style={{width: "30px", height: "30px", objectFit: "cover", cursor: "pointer"}} src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png"></img>
                <img alt="Twitter" style={{width: "30px", height: "30px", objectFit: "cover", cursor: "pointer"}} src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7d035ba85f6486680c2facedecdcf4d.png"></img>
            </Left>
            <Right>
            <form>
                <div className="name-inputs">
                    <div className="first-name">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" />
                    </div>
                    <div className="last-name">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" />
                    </div>
                </div>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Email us a message</label>
                <textarea id="message" name="message"></textarea>

                <div className="submit">
                    <input type="submit" value="Send" />
                </div>
            </form>
            </Right>
        </Back>

    </div>
  )
}

export default Contacts