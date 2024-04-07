import React from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import "./a.module.css";

const Home = () => {
  return (
    <div className="mt-[100px] justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-start items-start">
          <h1 className="font-bold text-[64px]">
            <span className="text-blue-600">Med</span>Vault
          </h1>
          <p className="text-[32px]">
            A Secure and Accessible Patient Information Platform for Healthcare
            Professionals
          </p>
        </div>
        <div>
          <img src={image1} alt="image1" className="" />
          <img src={image2} alt="image2" className="" />
          <img src={image3} alt="image3" className="" />
          <img src={image4} alt="image4" className="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
