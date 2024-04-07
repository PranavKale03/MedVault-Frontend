import React from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import Illustration from "../../assets/illustration.svg"

const Home = () => {
  const images = document.querySelectorAll(".absolute");

  let angle = 0;
  const angleIncrement = 360 / images.length;

  function rotateImages() {
    images.forEach((img, index) => {
      const x =
        32 * Math.cos(((angle + angleIncrement * index) * Math.PI) / 180);
      const y =
        32 * Math.sin(((angle + angleIncrement * index) * Math.PI) / 180);
      img.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
    });
    angle += 1; // Adjust rotation speed
    requestAnimationFrame(rotateImages);
  }

  rotateImages();
  return (
    <div className="mt-[100px] flex justify-center items-center">
      <div className="w-full flex justify-around items-center gap-10">
        <div className="w-[50%] flex flex-col justify-start items-start ml-5">
          <h1 className="font-bold text-[64px]">
            <span className="text-blue-600">Med</span>Vault
          </h1>
          <p className="text-[32px]">
            A Secure and Accessible Patient Information Platform for Healthcare
            Professionals
          </p>
        </div>
        <div className="w-[50%]">
        <img src={Illustration} alt="Illustration" />
          {/* <div className="flex justify-center items-center h-screen">
            <div className="relative w-64 h-64">
              <div className="absolute rounded-full overflow-hidden transition-transform duration-500 transform rotate-0">
                <img
                  src={image1}
                  alt="Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute rounded-full overflow-hidden transition-transform duration-500 transform rotate-0">
                <img
                  src={image2}
                  alt="Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute rounded-full overflow-hidden transition-transform duration-500 transform rotate-0">
                <img
                  src={image3}
                  alt="Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute rounded-full overflow-hidden transition-transform duration-500 transform rotate-0">
                <img
                  src={image4}
                  alt="Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
