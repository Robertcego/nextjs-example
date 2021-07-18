import React from 'react';
import Nav from './Nav.jsx';
import Header from './Header.jsx';
import styles from '../styles/Layout.module.css';

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
