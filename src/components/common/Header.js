import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#F15B2A' };
  return (
    <nav>
      <NavLink to='/' activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to='/courses' activeStyle={activeStyle}>
        Courses
      </NavLink>
      {' | '}
      <NavLink to='/about' activeStyle={activeStyle}>
        About
      </NavLink>
      {' | '}
      <NavLink to='/dashboard' activeStyle={activeStyle}>
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Header;
