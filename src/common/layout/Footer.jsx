import React from 'react';

const footerStyle = {
  background: '#43c14b',
  border: '5px solid #349e3a',
  borderBottom: '0px',
  borderRadius: '5px 5px 0 0',
  opacity: '90%',
  boxSizing: 'border-box',
  width: '60%',
  color: '#FAFAFA',
  padding: '5px',
  marginTop: '10px',
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
                Copyright © by Piotr Pawelski, 2019
    </footer>
  );
}
