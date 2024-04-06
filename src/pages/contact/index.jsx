import React from "react";
import ContactImage from "../../assets/ContactEmail.svg";

const Contact = () => {
  return (
    <div className="w-full h-[450px] mt-[200px] flex justify-around items-center">
      <div className="flex flex-col justify-start gap-5 px-5">
        <img className="w-[150px]" src={ContactImage} alt="Contact Image" />
        <div className="flex flex-col justify-start items-start">
          <span className="font-bold text-[64px]">Contact</span>
          <span className="font-bold text-[64px] text-blue-600">Us</span>
        </div>
        <p className="text-[20px]">Our team will contact you soon.</p>
      </div>
      <div className="w-[40%] h-full flex flex-col justify-center items-center">
        <div className="w-full h-full flex flex-col justify-center items-center gap-5 bg-slate-100 rounded-3xl">
          <div className="w-full px-5 flex flex-col gap-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                value=""
                onChange={() => {}}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Enter name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value=""
                onChange={() => {}}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="nummber"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                value=""
                onChange={() => {}}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Enter number"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
