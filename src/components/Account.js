import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import
import account from './acount.png'; // Check image path

const Account = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Reference for the dropdown menu
  const profileIconRef = useRef(null); // Reference for the profile icon
  const [isOpen, setIsOpen] = useState(false);

  const onNavigate = () => {
    navigate('/login'); // Correct path to login
  };packagpublic/logo.jpg
  

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        !profileIconRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the dropdown
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside); // Cleanup listener
    };
  }, []);

  const profileContainerStyle = {
    position: 'relative',
    display: 'inline-block',
    marginRight: '20px',
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

  return (
    <div style={profileContainerStyle}>
      {/* Added ref to profile icon */}
      <div 
        ref={profileIconRef} 
        style={profileIconStyle} 
        onClick={toggleDropdown}
      >
        <img
          src={account}
          alt="Profile"
          style={profileImgStyle}
        />
      </div>
      {isOpen && (
        <div ref={dropdownRef} style={dropdownMenuStyle}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={dropdownItemStyle}>View Profile</li>
            <li style={dropdownItemStyle}>Settings</li>
            <li style={dropdownItemStyle} onClick={onNavigate}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Account;
