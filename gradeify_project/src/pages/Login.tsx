import React from 'react';
import Layout from '../components/Layout';

const Login: React.FC = () => {
  return (
    <Layout>
      <div style={styles.container}>
        <div style={styles.form}>
          <label style={styles.label}>Email</label>
          <input type="email" style={styles.input} />

          <label style={styles.label}>Password</label>
          <input type="password" style={styles.input} />

          <a style={styles.link}>Create account</a>
        </div>
      </div>
    </Layout>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 300px)',
  },
  form: {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  backgroundColor: '#585050',
  borderRadius: 8,
  minWidth: '300px',
  width: '40%',
  },  
  label: {
    fontFamily: "'Gurajada', sans-serif",
    fontSize: 64,
    color: '#FFFFFF',
    height: 100
  },  
  input: {
    padding: '0.5rem',
    fontSize: 16,
    borderRadius: 4,
    border: '1px solid #ccc',
    width: '70%',
    height: 40,
  },  
  link: {
    marginTop: '1.5rem', // extra space before "create account"
    fontSize: 14,
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
  },  
};

export default Login;
