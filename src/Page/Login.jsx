import React, { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../Provider/AuthContext";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    logInUser(email, password)
      .then((userActive) => {
        alert("User Log in successful", userActive.user);
        console.log(userActive.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-semibold mb-2">
            Login your account
          </h2>

          <form onSubmit={handleLogIn} className="space-y-4">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Login Button */}
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-neutral w-full">
                Login
              </button>
            </div>

            {/* Register Link */}
            <p className="text-center text-sm mt-2">
              Don't Have An Account?{" "}
              <Link
                to="/auth/register"
                className="text-red-500 font-medium hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
