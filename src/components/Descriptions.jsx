import React from "react";
import "./Descriptions.css";
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Descriptions = ({ weather, units }) => {


  return (
    <div className="section section__descriptions">
    
      <div className="card">
        <div className="description__card-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
    </div>
  );
};

export default Descriptions;
