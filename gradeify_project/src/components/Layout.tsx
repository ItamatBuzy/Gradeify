import React from 'react';
import { ReactNode } from 'react';
import logo from '../assets/images/Logo.png';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header style={styles.header}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h1 style={styles.title}>Gradeify</h1>
      </header>
      <main style={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;

// todo: seperate files
const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
  },
  logo: {
    width: 96,
    height: 96,
    marginRight: '1rem',
    margin: 0,
  },
  title: {
    fontFamily: "'Gurajada', sans-serif",
    fontSize: 64,
    color: '#6D6D6D',
    margin: 0,
  },
  main: {
    padding: '2rem',
  },
};
