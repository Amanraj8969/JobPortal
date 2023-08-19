import React from 'react';
import './Footer.css'; // Import your CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-option">
          <i className="fa fa-envelope"></i>
          <span>Email:<a className='gmail1' href='mailto:Career@nebula-recruiters.com'>Career@nebula-recruiters.com</a></span>
        </div>
        <div className="contact-option">
          <i className="fa fa-phone"></i>
          <span>Phone: +91 8757059687</span>
        </div>
        <div className="contact-option">
          <i className="fa fa-map-marker"></i>
          <span>Address: Plot no - 786, markan, dist - siwan,841226,India</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
