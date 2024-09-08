import { projects } from "@/data";
import React from "react";
import Link from "next/link";
import { PinContainer } from "./ui/3d-pin";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
        {projects.map(
          ({ id, title, des, img, iconLists, link, previewLink }) => (
            <div
              key={id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <div>
                <PinContainer title={title} href={link}>
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                      <img src="/bg.png" alt="bg-img" />
                    </div>
                    <img
                      src={img}
                      alt={title}
                      className="z-10 absolute bottom-0"
                    />
                  </div>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                  </h1>
                  <p className="lg:text-xl lg:font-normal font-light text-sm ">
                    {des}
                  </p>
                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full bg-black lg:h-10 w-8 h-8 flex items-center justify-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon" className="p-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center items-center space-x-4">
                    <a
                      href={previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <div className="inline-flex items-center justify-center bg-transparent border-[2px] border-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded">
                        <span>Preview</span>
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                        </svg>
                      </div>
                    </a>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className="inline-flex items-center justify-center bg-transparent border-[2px] border-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded">
                        <span>Code</span>
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                        </svg>
                      </div>
                    </a>
                  </div>

                  {/* Button with FaLocationArrow icon */}
                </PinContainer>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
