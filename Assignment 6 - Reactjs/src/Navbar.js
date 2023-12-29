import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
    return (
        <div className='container'>
          <div className='header'>
            <img src='nav.jpg' alt='nav' style={{ width: "100%", height: "250px", margin: 0, display: 'block' }} />
            <h1 style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", color: "white", textAlign: "center", fontSize: "60px", textShadow: "2px 2px 4px black" }}> 
              GamDeve Testified Sdn Bhd
            </h1>
          </div>
            <ol className='nav-list'>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/abt'}>About Us</Link></li>
              <li><Link to={'/svc'}>Services</Link></li>
              <li><Link to={'/ctcs'}>Contacts</Link></li>
            </ol>
        </div>
    );
}

export default Navbar;
