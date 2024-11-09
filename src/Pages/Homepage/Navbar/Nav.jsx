import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { TbShoppingCartHeart } from "react-icons/tb";

const Nav = () => {
  return (
    <>
    {/* <div className="navbar bg-base-100 my-4 max-w-[1200px] mx-auto">
      <div className="flex-1">
        <img src="https://i.ibb.co.com/b5gT1bC/images-logo-logo.png" alt="" />
      </div>
      <div className="flex-none">
        <div className="flex gap-5 text-2xl divide-x-2">
            <IoSearch/>
            <div className="pl-6" ><FaRegUser/></div>
            <div className="pl-6"><TbShoppingCartHeart /></div>
        </div>
      </div>
    </div>
  <div className="navbar justify-center bg-[#2F333A] text-white mx-auto max-w-full h-2">
  <div className="navbar-center">
    <ul className="menu menu-horizontal px-1 text-lg">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li>
        <details>
          <summary>Home Furniture</summary>
          <ul className="p-2">
            <li><a>Bedroom</a></li>
            <li><a>Dining</a></li>
            <li><a>Living</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Ofiice Furniture</summary>
          <ul className="p-2">
            <li><a>Lounge</a></li>
            <li><a>Ofiice Chair</a></li>
            <li><a>Ofiice Table</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Hospital Furniture</summary>
          <ul className="p-2">
            <li><a>Hospital Bed</a></li>
            <li><a>Hospital Utility</a></li>
          </ul>
        </details>
      </li>
      <li><a>Contact</a></li>
    </ul>
  </div>

</div> */}
{/* nav2 */}
<div className="navbar bg-base-100 my-4 max-w-[1200px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li>
        <details>
          <summary>Home Furniture</summary>
          <ul className="p-2">
            <li><a>Bedroom</a></li>
            <li><a>Dining</a></li>
            <li><a>Living</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Ofiice Furniture</summary>
          <ul className="p-2">
            <li><a>Lounge</a></li>
            <li><a>Ofiice Chair</a></li>
            <li><a>Ofiice Table</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Hospital Furniture</summary>
          <ul className="p-2">
            <li><a>Hospital Bed</a></li>
            <li><a>Hospital Utility</a></li>
          </ul>
        </details>
      </li>
      <li><a>Contact</a></li>
      </ul>
    </div>
    <div className="flex-1">
        <img src="https://i.ibb.co.com/b5gT1bC/images-logo-logo.png" alt="" />
      </div>
  </div>
  <div className="navbar-end">
  <div className="flex gap-5 text-2xl divide-x-2">
            <IoSearch/>
            <div className="pl-6 flex lg:hidden" ><MdOutlineSettings /></div>
            <div className="pl-6 hidden lg:flex" ><FaRegUser/></div>
            <div className="pl-6 hidden lg:flex"><TbShoppingCartHeart /></div>
        </div>
  </div>
  </div>
  <div className=" hidden lg:flex justify-center bg-[#2F333A] text-white">
  <ul className="menu menu-horizontal px-1 text-lg">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li>
        <details>
          <summary>Home Furniture</summary>
          <ul className="p-2">
            <li><a>Bedroom</a></li>
            <li><a>Dining</a></li>
            <li><a>Living</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Ofiice Furniture</summary>
          <ul className="p-2">
            <li><a>Lounge</a></li>
            <li><a>Ofiice Chair</a></li>
            <li><a>Ofiice Table</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Hospital Furniture</summary>
          <ul className="p-2">
            <li><a>Hospital Bed</a></li>
            <li><a>Hospital Utility</a></li>
          </ul>
        </details>
      </li>
      <li><a>Contact</a></li>
    </ul>
  </div>

    </>
  );
};

export default Nav;
