import React from 'react';

type Props = {
  onClick?: () => void;
};

const HomeLoginButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      Login & Start
    </button>
  );
};

export default HomeLoginButton;

const styles = {
  button: {
    marginTop: '2rem',
    height: 64,
    fontSize: 72,
    lineHeight: '64px',
    fontFamily: "'Gurajada', sans-serif",
    backgroundColor: '#5A9CB6',
    color: '#000000',
    border: 'none',
    cursor: 'pointer',
    padding: '0 2rem',
    overflow: 'hidden',
  },
};

