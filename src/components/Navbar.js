import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-blue-500">
      <div className="container mx-auto flex justify-between items-center h-24">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-yellow-300 bg-blue-400"
            className="inline-flex items-center py-6 px-3 my-6 rounded text-yellow-300 hover:text-green-300 text-2xl tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-yellow-300 bg-blue-400"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-300 hover:text-green-300 text-2xl tracking-widest"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/csagastegui59"
            className="mr-4"
            target="_blank"
            bgColor="white"
            fgColor="fff"
            style={{ height: 45, width: 45 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/christian-sagastegui/"
            className="mr-4"
            target="_blank"
            bgColor="black"
            fgColor="white"
            style={{ height: 45, width: 45 }}
          />
        </div>
      </div>
    </header>
  );
}
