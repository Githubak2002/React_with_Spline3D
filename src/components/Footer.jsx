import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

import 'remixicon/fonts/remixicon.css'
import { Link } from "react-router-dom";
// import { FaRegHeart } from "react-icons/fa";

const hover_css = "hover:scale-125 transition-all";

const Footer = () => {
  return (
    <footer className="mt-10 py-5 border-t-[1.2px] flexCenter flex-col gap-y-4 text-white">
      <h2 className="flexCenter gap-2 text-base sm:text-xl ">
        Made wiht
        <CiHeart />
        {/* <FaRegHeart /> */}
        using React_Js
        <FaReact />
      </h2>
      <h2 className="text-center text-base sm:text-xl ">
        Feel free to contact
      </h2>

      {/* ==== LOGO LINKS ==== */}
      <div className="flexCenter gap-4 text-3xl sm:text-5xl ">
        <Link
          to="https://www.linkedin.com/in/anuraglohar"
          className={hover_css}
          target="blank"
        >
          <i className="ri-linkedin-fill " />
        </Link>
        <Link
          to="https://github.com/Githubak2002"
          className={hover_css}
          target="blank"
        >
          <i className="ri-github-line font-thin" />
        </Link>

        <Link
          to="https://twitter.com/Anurag_2023_"
          className={hover_css}
          target="blank"
        >
          <FaXTwitter />
        </Link>
        <Link
          to="mailto:anuragofficial2023@gmail.com"
          className={hover_css}
          target="blank"
        >
          <BiLogoGmail />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
