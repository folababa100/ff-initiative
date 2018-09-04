import React from 'react';
import HeaderDesign from './HeaderDesign';
import HeaderFilterDesign from './HeaderFIlterDesign';
import HeaderFilterSearch from './HeaderFilterSearch';

const Header = () => {
  return (
    <header className="header">
      <HeaderDesign/>
      <HeaderFilterDesign/>
      <HeaderFilterSearch/>
    </header>
  )
}

export default Header;
