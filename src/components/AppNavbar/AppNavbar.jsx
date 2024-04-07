import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import Logo from "../../assets/react.svg";
import UserContext from "../../context/UserContext";
import Profile from "../../assets/profile.svg";
import { clearAllLocalStorage } from "../../utils/localStorage";

const AppNavbar = () => {
  const { user } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  const Popover = () => {
    return (
      <div className="mt-[275px] ml-[675px] p-6 absolute bg-slate-200 rounded-xl gap-2">
        <div className="flex flex-col justify-start items-start gap-2 p-2">
          <div onClick={navigate(`/${user.id}`)}>Profile</div>
          <div onClick={navigate("/")}>Dashboard</div>
          <div>Availability</div>
          <div
            onClick={() => {
              clearAllLocalStorage();
              navigate("/");
            }}
          >
            Logout
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              <span className="text-blue-700">Med</span>Vault
            </span>
          </a>
          <div className="flex items-center justify-center flex-grow md:justify-center md:flex md:flex-grow-0 md:w-auto">
            <ul className="flex justify-center space-x-8 md:justify-center">
              <li>
                <a href="/" className="text-gray-900 hover:text-blue-700">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="text-gray-900 hover:text-blue-700"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/patient-list"
                  className="text-gray-900 hover:text-blue-700"
                >
                  Patient List
                </a>
              </li>
              <li>
                <a
                  href="/appointments"
                  className="text-gray-900 hover:text-blue-700"
                >
                  Appointments
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-900 hover:text-blue-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {user ? (
            <div className="flex items-center">
              <div className="ml-4">
                <Link to={`/${user.id}`}>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={Profile}
                    alt="Profile"
                  />
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                <Link to="/login">Login</Link>
              </button>
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default AppNavbar;
