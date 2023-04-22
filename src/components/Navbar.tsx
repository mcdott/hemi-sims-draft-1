// Navbar.tsx

import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  scrollToSketches: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSketches }) => {
  const location = useLocation();

  return (
    <nav className='bg-blue-500 p-4 text-white font-bold'>
      <ul className='flex items-center justify-between'>
        <li className='text-2xl'>Hemianopsia Sims</li>
        <li>
          <ul className='flex items-center space-x-4'>
            {location.pathname === "/about" ? (
              <li>
                <Link
                  to='/'
                  className='focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300'
                >
                  Home
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <button
                    className='focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300'
                    onClick={scrollToSketches}
                  >
                    Simulations
                  </button>
                </li>
                <li>
                  <Link
                    to='/about'
                    className='focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300'
                  >
                    About
                  </Link>
                </li>
              </>
            )}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
