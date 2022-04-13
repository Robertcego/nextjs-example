// create a simple navbar component

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { navLinks } from '../utils/navLinks';

const NavBar = () => {
  return (
    <nav>
      {navLinks.map((item, i) => (
        <Link href={item.path} key={i} passHref>
          <li>{item.name}</li>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
