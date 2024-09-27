import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navber = () => {
    const {user, logOut, createUser} = useContext(AuthContext);

  console.log("Photo dekha", {user})
  const handleSignOut = () =>{
      logOut()
        .then()
        .cacth()

  }
  

    const navLinks = (
        <>
          <li className="flex ">
                <NavLink to="/" className={({isActive }) =>
                    isActive ? 'text-[#a38138] font-bold border border-[#a38138]' : 'font-bold'
                }>Home</NavLink>
            </li>
            <li className="flex ">
                <NavLink to="/about" className={({isActive }) =>
                    isActive ? 'text-[#a38138] font-bold border border-[#a38138]' : 'font-bold'
                }>About Us</NavLink>
            </li>
          <li className="flex ">
                <NavLink to="/update" className={({isActive }) =>
                    isActive ? 'text-[#a38138] font-bold border border-[#a38138]' : 'font-bold'
                }>Update Profile</NavLink>
          </li>
          <li className="flex ">
                <NavLink to="/user" className={({isActive }) =>
                    isActive ? 'text-[#a38138] font-bold border border-[#a38138]' : 'font-bold'
                }>User Profile</NavLink>
          </li>
          
        </>
      );
    return (
        <div className="navbar bg-base-100 my-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <a className="animate__animated animate__bounce animate__infinite text-3xl font-semibold">Lux<span className="text-[#a38138]">T</span>ate</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {
            user ?
            <a className="btn bg-[#a38138] text-white">{user.email}</a>
            :
            <Link to="/login"><a className="btn bg-[#a38138] text-white">Log In</a></Link>
          }
          
          <a onClick={handleSignOut} className="btn bg-[#a38138] text-white">Log Out</a>
        </div>

        
        
      </div>
    );
};

export default Navber;