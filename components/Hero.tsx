import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";
import img from "../assets/profile.jpg"; // Import profile image

const Hero = () => {
  return (
    <div className="pb-20 pt-20">
      {" "}
      {/* Adjust padding as necessary */}
      <div
        className="flex justify-center items-center relative my-10 z-10 flex-wrap md:flex-nowrap px-4"
        style={{ gap: "10%" }} // Set the gap to 20%
      >
        {/* Left side - description and social links */}
        <div className="max-w-md flex flex-col items-start justify-center pr-8">
          <h2 className="uppercase tracking-widest text-xs text-left text-blue-100 mb-2">
            Software Engineer
          </h2>
          <TextGenerateEffect
            className="text-left text-[40px] md:text-5xl lg:text-6xl"
            words="Kanika Rana"
          />

          <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-l">
            I'm Kanika Rana, a driven and enthusiastic 4th-year B.Tech CSE
            student at Graphic Era Hill University. My journey in computer
            science is characterized by a passion for technology and innovation.
            I constantly seek new challenges to expand my skills and knowledge,
            and I'm particularly interested in areas such as web development,
            artificial intelligence, and data science. As a quick learner, I
            enjoy tackling complex problems and collaborating with teams to
            create impactful solutions.
          </p>

          {/* Social profiles box */}
          <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all duration-300 hover:scale-110 hover:bg-purple"
            >
              <img src={info.img} alt="icons" width={20} height={20} className="transition-all duration-300 hover:filter-none hover:brightness-0 hover:invert" />
            </a>
          ))}
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
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
    </div>
  );
};

export default Hero;
