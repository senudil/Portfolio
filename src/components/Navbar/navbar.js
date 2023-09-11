import React from 'react';
import './navbar.css';
import PhoneIcon from '@mui/icons-material/Phone';

const NavBar = () => {
  const handleContactButtonClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='navbar'>
      <div className='destopMenu'>
        <a className='destopMenuListItem' href='#intro'>Home</a>
        <a className='destopMenuListItem' href='#skills'>About</a>
        <a className='destopMenuListItem' href='#work'>Portfolio</a>
      </div>

      <button className="btn" onClick={handleContactButtonClick}>
        <PhoneIcon style={{ marginRight: '8px' }} />
        <p className='contact-text'>Contact me</p>
      </button>
    </nav>
  );
};

export default NavBar;
