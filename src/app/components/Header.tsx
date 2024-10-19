import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-600 to-black text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold hover:text-yellow-300">My Website</h1>
        <nav>
          <ul className="flex space-x-6 ml-10">
            <li>
              <a className="hover:text-yellow-400 transition-colors-300" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-yellow-400" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-yellow-400" href="/servicee">
                Service
              </a>
            </li>
            <li>
              <a className="hover:text-yellow-400" href="/articals">
                Articals
              </a>
            </li>
            <li>
              <a className="hover:text-yellow-400"href="/portfolio">
              Portfolio
              </a>
            </li>
            <li>
            <a 
            href="/sign up"
            className="bg-yellow-400 hover:text-white font-bold  text-black py-2 px-2 rounded-full ">Sign Up
            </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
