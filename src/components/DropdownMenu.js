import React, { useState } from 'react';
import downArrow from '../arrowDown.svg';

const DropdownMenu = ({ name, menuItems, order }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = document.querySelector(`.navigator__main--row-${order}`);
  if (isOpen) {
    menu.classList.add('stretch');
  } else {
    menu.classList.remove('stretch');
  }

  return (
    <nav className='dropdown__container'>
      <div
        className={isOpen ? 'dropdown__danger__toggle' : ''}
        onClick={() => setIsOpen(!isOpen)}
      >
        {name} <img src={downArrow} className='arrow-icon' alt='arrow down' />
      </div>
      {isOpen && (
        <ul className='dropdown__menu'>
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default DropdownMenu;
