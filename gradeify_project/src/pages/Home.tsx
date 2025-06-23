import React from 'react';
import Layout from '../components/Layout';
import HomeLoginButton from '../components/HomeButton';

const Home: React.FC = () => {
  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.title}>Grade anything your way with our app! </h1>
        <h2 style={styles.semi_title}>Create custom criteria and grade whatever you want</h2>
        <h2 style={styles.semi_title_tight}>whenever you want, with ease.</h2>
        <HomeLoginButton />
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    marginLeft: '5rem'
  },
  title: {
    fontFamily: "'Mochiy Pop One', sans-serif",
    fontSize: 64,
    color: '#000000',
    marginBottom: 28,
  },
  semi_title: {
    fontFamily: "'Mochiy Pop One', sans-serif",
    fontSize: 40,
    color: '#000000',
    marginBottom: 0,
  },
  semi_title_tight: {
    fontFamily: "'Mochiy Pop One', sans-serif",
    fontSize: 40,
    color: '#000000',
    marginTop: 0,       
    marginBottom: 0,
    lineHeight: 1,   
  }
};

export default Home;