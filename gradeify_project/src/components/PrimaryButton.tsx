import React from 'react';

type Props = {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties; // allow optional overrides
};

const PrimaryButton: React.FC<Props> = ({ text, onClick, style }) => {
  return (
    <button style={{ ...styles.button, ...style }} onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryButton;

const styles = {
  button: {
    marginTop: '2rem',
    width: '45%',
    height: 74,
    backgroundColor: '#457BA8',
    color: '#FFFFFF',
    fontSize: 64,
    fontFamily: "'Gurajada', sans-serif",
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  } as React.CSSProperties,
};
