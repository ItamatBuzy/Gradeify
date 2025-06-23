import React from 'react';
import Layout from '../components/Layout';
import PrimaryButton from '../components/PrimaryButton';

const Login: React.FC = () => {
  return (
    <Layout>
      <div style={styles.container}>
        <div style={styles.form}>
              <label style={styles.label}>Email</label>
              <input type="email" style={styles.input} />
      
              <label style={styles.label}>Password</label>
              <input type="password" style={styles.input} />
              
              <div style={styles.submit}>
                <PrimaryButton text="Enter"></PrimaryButton>
                <a style={styles.link}>create account</a>
              </div>
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
  borderRadius: 28,
  minWidth: '300px',
  width: '40%',
  paddingLeft: '5rem'
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
  submit: {  
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }, 
  link: {
    fontFamily: "'Gurajada', sans-serif",
    marginLeft: '1.5rem',
    marginTop: '1.5rem',
    fontSize: 64,
    color: '#278CFF',
    cursor: 'pointer',
  },
};

export default Login;
