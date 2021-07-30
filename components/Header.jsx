import React from 'react';

import headerStyles from '../styles/Header.module.css';

function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Robert</span> cego
      </h1>
      <p className={headerStyles.description}>FrontEnd Developer.</p>
    </div>
  );
}

export default Header;
