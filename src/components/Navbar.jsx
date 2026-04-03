import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RiLoginCircleLine } from "react-icons/ri";

const Navbar = () => {
  const links = [
    <li key="products">
      <a>Products</a>
    </li>,
    <li key="features">
      <a>Features</a>
    </li>,
    <li key="pricing">
      <a>Pricing</a>
    </li>,
    <li key="testimonials">
      <a>Testimonials</a>
    </li>,
    <li key="faq">
      <a>FAQ</a>
    </li>,
  ];
  return (
    <div className="bg-base-100">
      <div className="navbar h-auto w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
              <div className=" flex flex-col items-center gap-2">
                <div className="divider -mb-1"></div>
                <a href="btn">
                  {" "}
                  <FiShoppingCart />{" "}
                </a>
                <a className="text-base font-semibold text-[#101727]" href="">
                  Login
                </a>
                <a className="btn btn-sm w-full rounded-full text-sm font-semibold bg-linear-to-r from-primary to-another text-white">
                  Get Started
                </a>
              </div>
            </ul>
          </div>
          <p className="leading-relaxed bg-clip-text h-auto text-transparent text-2xl sm:text-4xl lg:text-[48px] bg-linear-to-r from-primary to-another font-bold ">
            DigiTools
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-base px-1 text-[#101727] font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end hidden md:flex items-center gap-4">
          <a href="btn ">
            {" "}
            <FiShoppingCart />{" "}
          </a>
          <a className="text-base font-semibold text-[#101727]" href="">
            Login
          </a>
          <a className="btn btn-lg rounded-full text-base font-semibold bg-linear-to-r from-primary to-another text-white">
            Get Started
          </a>
        </div>
        <div className="navbar-end md:hidden flex items-center gap-4">
          <button className="flex items-center font-semibold gap-1 text-base">
            <RiLoginCircleLine /> Login
          </button>
          <a className="btn btn-md hidden sm:flex rounded-full text-base font-semibold bg-linear-to-r from-primary to-another text-white">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
