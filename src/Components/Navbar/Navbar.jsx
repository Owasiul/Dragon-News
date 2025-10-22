import { Link, NavLink } from "react-router";
import profile_icon from "../../assets/user.png";
import "./Navbar.css";
import { use } from "react";
import AuthContext from "../../Provider/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        alert("Sign Out Successful");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="flex items-center justify-between pt-5">
      <div className="empty">{user && user.email}</div>
      <div className="nav flex md:flex-row flex-col md:gap-5 gap-3 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-2">
        <img src={profile_icon} alt="" />
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-primary text-white md:px-10 px-7 py-2"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn bg-primary text-white md:px-10 px-7 py-2"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
