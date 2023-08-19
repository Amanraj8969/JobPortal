import React from 'react';
import './Video.css'; // Import your CSS file for styling

const Video = () => {
  return (
    <div className="video-container">
      <video className="responsive-video" autoPlay loop muted playsInline>
        <source src="your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
