import React from "react";
import QZonePic1 from "../../assets/swimming.png";
import QZonePic2 from "../../assets/class.png";
import QZonePic3 from "../../assets/playground.png";
const Q_Zone = () => {
  return (
    <div className="">
      <h1 className="font-bold mb-3">Q-Zone</h1>
      <div className="bg-base-300 rounded-xl p-2 flex md:flex-col flex-row items-center">
        <img src={QZonePic1} alt="" />
        <img src={QZonePic2} alt="" />
        <img src={QZonePic3} alt="" />
      </div>
    </div>
  );
};

export default Q_Zone;
