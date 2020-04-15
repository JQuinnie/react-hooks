import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div>
    <footer>
      <Link to="/">
        <button
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          style={{ cursor: 'pointer' }}
        >
          Go Home
        </button>
      </Link>
    </footer>
  </div>
);

export default Footer;
