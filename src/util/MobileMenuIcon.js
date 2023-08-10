import React from 'react';

function MobileMenuIcon({ onClick, isOpen }) {
  return (
    <div className={`mobile-menu-icon ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default MobileMenuIcon;
