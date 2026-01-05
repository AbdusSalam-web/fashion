import { Link, NavLink } from "react-router";
const Navbar = () => {
  return (
    <>
      <nav class="flex items-center justify-between px-15">
        <div class="logo font-Poppins text-[48px] font-semibold text-[#000000]">
          <Link to="/">Fresh</Link>
        </div>
        <div class="font-Poppins text-6 flex items-center gap-14.75 font-semibold text-[#000000]">
          <NavLink
            to="/men"
            className={({ isActive }) =>
              `hover:text-primary transition-all duration-300 ${isActive ? "text-primary" : ""} `
            }
          >
            Men
          </NavLink>
          <NavLink
            to="/women"
            className={({ isActive }) =>
              `hover:text-primary transition-all duration-300 ${isActive ? "text-primary" : ""} `
            }
          >
            Women
          </NavLink>
          <NavLink
            to="/kids"
            className={({ isActive }) =>
              `hover:text-primary ${isActive ? "text-primary" : ""} transition-all duration-300`
            }
          >
            Kids
          </NavLink>
          <NavLink
            to="/collections"
            className={({ isActive }) =>
              `hover:text-primary ${isActive ? "text-primary" : ""} transition-all duration-300`
            }
          >
            Collections
          </NavLink>
          <NavLink
            to="/trends"
            className={({ isActive }) =>
              `hover:text-primary ${isActive ? "text-primary" : ""} transition-all duration-300`
            }
          >
            Trends
          </NavLink>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="font-Poppins flex h-14.25 w-30.25 cursor-pointer items-center justify-center rounded-[10px] border border-[#FFD687] text-[24px] font-semibold text-black">
            Log In
          </button>
          <button className="font-Poppins bg-primary flex h-14.25 w-30.25 cursor-pointer items-center justify-center rounded-[10px] text-[24px] font-semibold text-black">
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
