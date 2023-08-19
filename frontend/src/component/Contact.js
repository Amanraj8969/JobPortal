import React from 'react';
import './Contact.css'; // Import your CSS file
import Footer from './footer/Footer';

function ContactUsPage() {
  return (
    <>
     <div className=" moto_box">
      <div className="contact-box">
        <i className="fa fa-envelope"></i>
        <h3 className='goal'>Our Goal</h3>
        <p>Welcome to Nebula Recruiters, your gateway to both IT and Non-IT job opportunities. We're here to assist you in finding the perfect job that matches your skills and aspirations. </p>
      </div>
    
     
    </div>
    {/* /////////////////////////////////////////////////// */}
    <div className="contact-us-container">
      <div className="contact-box">
        <i className="fa fa-envelope"></i>
        <h3>Gmail</h3>
        <p><a className="gmail" href='mailto:Career@nebula-recruiters.com'>Career@nebula-recruiters.com</a></p>
      </div>
      <div className="contact-box">
        <i className="fa fa-phone"></i>
        <h3>Phone Number</h3>
        <p>+91 8757059687</p>
      </div>
      <div className="contact-box">
        <i className="fa fa-map-marker"></i>
        <h3>Address</h3>
        <p>Plot no - 786, markan, dist - siwan,841226,India</p>
      </div>
     
    </div>
    
    </>
  );
}

export default ContactUsPage;
