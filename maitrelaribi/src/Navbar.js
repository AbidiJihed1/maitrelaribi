import React from 'react';
import { FaEnvelope, FaPhone, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "./logo.png"
const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}><a href='/'><img src={logo} style={{width:"80px",height:"60px"}} /></a></div>
      <p><FaPhone /> Phone: +216 71 562 938</p>
      <p><FaEnvelope /> Email: maitrelaaribi@gmail.com</p>
      {/* <div style={searchContainerStyle}>
        <input style={searchInputStyle} type="text" placeholder="Search..." />
        <FaSearch style={searchIconStyle} />
      </div> */}
      <ul style={navListStyle}>
      
        <li style={navItemStyle}><Link to="/"><span style={{color:"white"}}>Accueil</span></Link></li>
        <li style={navItemStyle}><Link to="/Actualités"><span style={{color:"white"}}>Actualités</span></Link></li>
        <li style={navItemStyle}><Link to="/about"><span style={{color:"white"}}>À propos</span></Link></li>
        <li style={navItemStyle}><Link to="/services"><span style={{color:"white"}}>Service</span></Link></li>
        <li style={navItemStyle}><Link to="/contact"><span style={{color:"white"}}>Contact</span></Link></li>
      </ul>
    </nav>
  );
};

// Styles
const navbarStyle = {
  backgroundColor: '#001f3f', // Dark blue or navy
  color: '#fff', // White text
  padding: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#ffd700', // Gold accent
};

const searchContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const searchInputStyle = {
  padding: '8px',
  marginRight: '10px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
};

const searchIconStyle = {
  cursor: 'pointer',
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
};

const navItemStyle = {
  margin: '0 15px',
  cursor: 'pointer',
};

export default Navbar;
