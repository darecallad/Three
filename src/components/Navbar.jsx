import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";

import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Luma Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[1rem] font-bold cursor-pointer flex">
            Chung An Chen |&nbsp;
            <span className="sm:block hidden">Luma AI 3D Web Assignment</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
