import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <div className="lg:space-x-5 space-y-2 md:space-y-0 flex flex-col lg:flex-row items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-base-content text-lg font-medium border border-indigo-500 rounded-md px-3 py-1 text-center"
            : "text-base-content text-center text-lg"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-base-content text-lg font-medium border border-indigo-500 rounded-md px-3 py-1 text-center"
            : "text-base-content text-center text-lg"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "text-base-content text-lg font-medium border border-indigo-500 rounded-md px-3 py-1 text-center"
            : "text-base-content text-center text-lg"
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive
            ? "text-base-content text-lg font-medium border border-indigo-500 rounded-md px-3 py-1 text-center"
            : "text-base-content text-center text-lg"
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-base-content text-lg font-medium border border-indigo-500 rounded-md px-3 py-1 text-center"
            : "text-base-content text-center text-lg"
        }
      >
        Contact
      </NavLink>
    </div>
  );

  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl w-28">
          <img src="/logo.svg" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
