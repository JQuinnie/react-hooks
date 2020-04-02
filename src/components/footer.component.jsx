import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div>
    <footer>
      <Link to="/">
        <button style={{ cursor: 'pointer' }}>Go Home</button>
      </Link>
    </footer>
  </div>
);

export default Footer;
