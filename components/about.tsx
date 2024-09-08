import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="flex w-full max-w-3xl">
        <div className="w-1/3 pr-4">
          <img src="your-image.jpg" alt="Your Image" className="rounded-lg" />
        </div>
        <div className="w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              Hello! I'm [Your Name], a dedicated professional with a passion for technology and creativity. I thrive on building innovative solutions and delivering exceptional results. My expertise lies in coding, design, and project management, where I constantly seek new ideas to make a meaningful impact. When I'm not pursuing excellence in my work, you can find me outdoors capturing moments with my camera or engrossed in a captivating book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
