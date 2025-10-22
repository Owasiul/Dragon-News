import React, { use } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router";
import AuthContext from "../Provider/AuthContext";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    createUser(email, password).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user)
    });
  };
  return (
    <div className="bg-base-200 mx-auto min-h-screen">
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-semibold mb-2">
              Register your account
            </h2>
            <hr className="my-2 border-gray-300" />

            <form onSubmit={handleRegister} className="space-y-4">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your photo URL"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Password */}
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

              {/* Terms & Conditions */}
              <div className="form-control">
                <label className="cursor-pointer label justify-start gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    required
                  />
                  <span className="label-text text-sm">
                    Accept{" "}
                    <a href="#" className="text-red-500 hover:underline">
                      Terms & Conditions
                    </a>
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <div className="form-control mt-2">
                <button type="submit" className="btn btn-neutral w-full">
                  Register
                </button>
              </div>
              {/* Login Link */}
              <p className="text-center text-sm mt-2">
                Already Have An Account?{" "}
                <Link
                  to="/auth/login"
                  className="text-red-500 font-medium hover:underline"
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
