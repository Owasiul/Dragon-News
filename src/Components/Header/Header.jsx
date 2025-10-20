import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="py-3 lg:px-0 px-3">
      <div className="top-header flex flex-col justify-center items-center space-y-3">
        <img className="" src={logo} alt="" />
        <p className="text-lg text-neutral-500 text-nowrap">
          Journalism Without Fear or Favour
        </p>
        <p className="text-lg font-medium text-accent">
         {format(new Date(), 'EEEE, MMMM MM, yyyy')}
        </p>
      </div>
    </div>
  );
};

export default Header;
