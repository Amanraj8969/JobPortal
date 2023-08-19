import React from 'react';
import './Service.css'; // We'll create this CSS file later
import Footer from '../footer/Footer';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Service = () => {
  return (
    <div className="service-page">
      <div className="row">
        <div className="col">
        <h2>Resume Building</h2>
  <p>We create professional resumes that stand out.</p>
        </div>
        <div className="col">
        <h2>Career Guidance</h2>
  <p>Expert advice to help you navigate your career path.</p>
        </div>
        <div className="col">
        <h2>Content Writing</h2>
  <p>High-quality content for websites, blogs, and more.</p>
        </div>
      </div>
      <div className="sample-task">
      <h3>Resume Task</h3>
    <p>Here Some made by us:</p>
  
  <div className="row">
        <div className="col">
        <h2>Resume for IT</h2>
        <img src='https://cdn-blog.novoresume.com/articles/resume-examples/resume-example.webp'/>
  <p>We create professional resumes that stand out.</p>
        </div>
        <div className="col">
        <h2>Resume for Non IT professional</h2>
        <img src='https://cdn-images.zety.com/pages/non_profit_resume_example_template_diamond.png'/>
  <p>Expert advice to help you navigate your career path.</p>
        </div>
        <div className="col">
        <h2>Resume for BDE</h2>
        <img src='https://www.myperfectresume.com/wp-content/uploads/2022/12/bussiness-development-executive-CV-template.svg'/>
  <p>High-quality content for websites, blogs, and more.</p>
        </div>
      </div>
  
      <Button><Link to="/payment">subscribe Us</Link></Button>
      </div>

      {/* /////////////////////////////////career section//////////////////////////////// */}

      <div className="sample-task">
      <h3>Our Career Guidance Client</h3>
    <p>Happy Clients</p>
  
  <div className="row">
        <div className="col">
        <h2>Placed at IT Sector</h2>
        <img src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
  <p>I am very happy with the service and i get my dream job in IT Sector </p>
        </div>
        <div className="col">
        <h2>Placed at Nebula Enterprise</h2>
        <img src='https://media.istockphoto.com/id/1263106535/photo/confidence-is-key.jpg?s=612x612&w=0&k=20&c=c2DFPodS0pvve0sV8fwMZ5eTC7bzpsjnRoQPyUICZWI='/>
  <p>The expert advice are soo helpful that will help to me achieve my dream job.</p>
        </div>
        <div className="col">
        <h2>Work As BDE</h2>
        <img src='https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?b=1&s=612x612&w=0&k=20&c=6a3xe-rWCcN8CJ80ZDM2IJqSofVUDP65nS9HCx2epXY='/>
  <p>High-quality content for websites, blogs, and more.</p>
        </div>
      </div>
      <Button><Link to="/payment">subscribe Us</Link></Button>

      </div>

       {/* ///////////////////////////////////carrer section end///////////////////////////// */}

       {/* ////////////////////////////////////Content Section//////////////////////////////// */}

       <div className="sample-task">
      <h3>Content Writing</h3>
    <p>Service in Comtent Writing</p>
  
  <div className="row">
        <div className="col">
        <h2>Script Writing for YouTube Video</h2>
        <img src='https://marketplace.canva.com/EAFb88sJToo/1/0/1600w/canva-yellow-creative-content-writer-youtube-thumbnail-vMsvz9iQ20E.jpg'/>
  <p>I am very happy with the service and script written soo good </p>
        </div>
        <div className="col">
        <h2>Content Writting for Resume</h2>
        <img src='https://resumeworded.com/assets/images/resume-guides/how-to-images/Portfolio_small.jpeg'/>
  <p>The content advice are soo helpful that will help to me achieve my dream job.</p>
        </div>
        <div className="col">
        <h2>Content Writting for Blog</h2>
        <img src='https://cdn.ttgtmedia.com/rms/onlineimages/what_is_a_blog_used_for-f_mobile.png'/>
  <p>High-quality content for websites, blogs, and more.</p>
        </div>
      </div>
      <Button><Link to="/payment">subscribe Us</Link></Button>

      </div>


       {/* ////////////////////////////////////////content Section end/////////////////////////// */}


      <Footer/>
    </div>
  );
}

export default Service;
