import {
  Facebook,
  FacebookIcon,
  InstagramIcon,
  Twitter,
  TwitterIcon,
} from "lucide-react";
import React from "react";

const FindUsOn = () => {
  return (
    <div className="my-3">
      <h1 className="font-bold mb-3">Find Us On</h1>
      <div className="flex flex-col join join-vertical">
        <div className="fb flex space-x-3 border border-base-300 p-3 ">
          <span>
            <FacebookIcon></FacebookIcon>
          </span>{" "}
          <span className="text-gray-500">Facebook</span>
        </div>
        <div className="tw flex space-x-3 border border-base-300 p-3">
          <span>
            <TwitterIcon></TwitterIcon>{" "}
          </span>{" "}
          <span className="text-gray-500">Tweeter</span>
        </div>
        <div className="in flex space-x-3 border border-base-300 p-3">
          <span>
            <InstagramIcon></InstagramIcon>{" "}
          </span>
          <span className="text-gray-500">Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
