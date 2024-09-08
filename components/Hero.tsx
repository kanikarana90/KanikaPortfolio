import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import img from "../assets/profile.jpg"; // Import profile image

const Hero = () => {
  return (
    <div className="pb-20 pt-20"> {/* Adjust padding as necessary */}
       <div
        className="flex justify-center items-center relative my-10 z-10 flex-wrap md:flex-nowrap px-4"
        style={{ gap: "10%" }} // Set the gap to 20%
      >
        {/* Left side - description and social links */}
        <div className="max-w-md flex flex-col items-start justify-center pr-8">
          <h2 className="uppercase tracking-widest text-xs text-left text-blue-100 mb-2">
            Computer Science Engineer
          </h2>
          <TextGenerateEffect
            className="text-left text-[40px] md:text-5xl lg:text-6xl"
            words="Kanika Rana"
          />

          <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Welcome to my digital portfolio! I'm Kanika Rana, a driven and
            enthusiastic 4th-year B.Tech CSE student at Graphic Era Hill
            University. My journey in computer science is characterized by a
            passion for technology and innovation.
          </p>

          {/* Social profiles box */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md border border-gray-300">
           
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600 hover:text-blue-800" size={24} />
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-900 hover:text-gray-700" size={24} />
              </a>
              <a href="mailto:your.email@gmail.com"> {/* Replace with your email address */}
                <FaEnvelope className="text-red-500 hover:text-red-700" size={24} /> {/* Use FaEnvelope for the Gmail icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Right side - image for larger screens */}
        <div className="hidden md:block">
          <img
            src={img.src} // Use img.src for the correct type
            alt="Kanika Rana"
            className="h-auto w-[300px] rounded-lg shadow-lg"
          />
        </div>

        {/* For smaller screens, you might want to place the image beneath */}
        <div className="block md:hidden w-full mt-8">
          <img
            src={img.src} // Use img.src for the correct type
            alt="Kanika Rana"
            className="h-auto w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* UI elements below the description */}
      <div>
        <Spotlight
          className="-top-40 -left-32 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 -left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>
    </div>
  );
};

export default Hero;
