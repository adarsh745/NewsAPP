import React, { useState } from 'react';
import acount from './acount.png'

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const profileContainerStyle = {
    position: 'relative',
    display: 'inline-block',
    marginRight:'20'

  };

  const profileIconStyle = {
    cursor: 'pointer',
  };

  const profileImgStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  };

  const dropdownMenuStyle = {
    position: 'absolute',
    top: '50px',
    right: '0',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '150px',
    zIndex: '1',
  };

  const dropdownItemStyle = {
    padding: '10px',
    cursor: 'pointer',
  };

  const dropdownItemHoverStyle = {
    backgroundColor: '#f1f1f1',
  };

  return (
    <div style={{profileContainerStyle,marginRight:28}} >
      <div style={profileIconStyle} onClick={toggleDropdown}>
        <img
          src={acount} 
          alt="Profile"
          style={profileImgStyle}
        />
      </div>
      {isOpen && (
        <div style={dropdownMenuStyle}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={dropdownItemStyle}>View Profile</li>
            <li style={dropdownItemStyle}>Settings</li>
            <li style={dropdownItemStyle}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Account;
 