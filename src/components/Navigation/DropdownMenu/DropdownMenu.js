import React from 'react';
import NavLinks from '../NavLinks';
import './DropdownMenu.scss';

const DropdownMenu = ({ isOpen }) => {
  return (
    <div className={`dropdown ${isOpen ? '' : 'hide'}`}>
      <NavLinks />
    </div>
  )
}

export default DropdownMenu
