// NavbarClient.tsx

import React, { useState } from 'react';
import { FaHome, FaUser, FaBook, FaCode, FaBriefcase, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const NavbarClient: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4 border rounded-3xl fixed left-1/2 transform -translate-x-1/2 top-5 z-10 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={toggleNavbar} className="lg:hidden text-gray-500 hover:text-white focus:text-white focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`lg:flex ${isOpen ? 'flex' : 'hidden'}`}>
          <NavItem name="Home" link="/" icon={<FaHome />} />
          <NavItem name="About" link="/about" icon={<FaUser />} />
          <NavItem name="Projects" link="/projects" icon={<FaBook />} />
          <NavItem name="Skills" link="/skills" icon={<FaCode />} />
          <NavItem name="Experience" link="/experience" icon={<FaBriefcase />} />
          <NavItem name="Contact" link="/contact" icon={<FaEnvelope />} />
        </ul>
      </div>
    </nav>
  );
};

export default NavbarClient;
