import React from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import Illustration from "../../assets/illustration.svg";
import AboutPage from "../../assets/About.png";
import Services from "../../assets/Services.png"
import Footer from "../../assets/Footer.png"
import Gallery from "../../assets/Gallery.png"

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
    <div className="mt-[100px] w-full flex flex-col justify-center items-center gap-[100px]">
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
        </div>
      </div>
      <div className="w-full">
        <img className="w-full" src={AboutPage} alt="About" />
      </div>
      <div className="w-full">
        <img className="w-full" src={Services} alt="Services" />
      </div>
      <div>
        <img src={Gallery} alt="Gallery" />
      </div>
      <div>
        <img className="w-full" src={Footer} alt="Footer" />
      </div>
    </div>
  );
};

export default Home;
