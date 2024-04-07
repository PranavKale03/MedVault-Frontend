import React from "react";
import ProfileImage from "../../assets/ProfileImage.svg";
import PhoneImage from "../../assets/Phone.svg";
import { Link } from "react-router-dom";

const PrescriptionForm = () => {
  const handleAdd = () => {
    const prescriptionSection = document.querySelector(".w-full.bg-slate-100");
    const newPrescriptionSection = prescriptionSection.cloneNode(true);
    prescriptionSection.parentNode.insertBefore(
      newPrescriptionSection,
      prescriptionSection.nextSibling
    );
  };

  const handleSend = () => {
    const tabletName = document.getElementById("tablet").value;
    const morningChecked = document.getElementById("default-checkbox").checked;
    const afternoonChecked =
      document.getElementById("default-checkbox").checked;
    const eveningChecked = document.getElementById("default-checkbox").checked;
    const beforeMealChecked =
      document.getElementById("default-checkbox").checked;
    const afterMealChecked =
      document.getElementById("default-checkbox").checked;

    console.log("Tablet Name:", tabletName);
    console.log("Morning Dose Checked:", morningChecked);
    console.log("Afternoon Dose Checked:", afternoonChecked);
    console.log("Evening Dose Checked:", eveningChecked);
    console.log("Before Meal Checked:", beforeMealChecked);
    console.log("After Meal Checked:", afterMealChecked);
  };
  return (
    <div className="mt-[100px] h-full flex justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center border rounded-3xl p-10 gap-5">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="font-bold text-[20px]">Patient Information</h1>
          <img src={ProfileImage} alt="Profile" />
          <p className="font-bold text-[16px]">Tanishq Khandelwal</p>
          <p>Last Visited: 21 March 2024 </p>
          <div className="flex justify-center items-center gap-8">
            <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl">
              <h1>Age</h1>
              <p>21</p>
            </div>
            <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl">
              <h1>Gender</h1>
              <p>Male</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center gap-5">
          <div className="w-full flex flex-col gap-2">
            <p>Phone No.</p>
            <div className="flex justify-start items-center bg-blue-100 p-1.5 rounded-xl">
              <img
                className="ml-3 w-[16px] mr-4"
                src={PhoneImage}
                alt="Phone"
              />
              9123456789
            </div>
          </div>
          <div className="w-full flex flex-col  gap-2">
            <p>Email Id</p>
            <div className="flex justify-start items-center bg-blue-100 p-1.5 rounded-xl">
              <img
                className="ml-3 w-[16px] mr-4"
                src={PhoneImage}
                alt="Phone"
              />
              tanishq123@gmail.com
            </div>
          </div>
          <div className="w-full flex flex-col  gap-2">
            <p>Visited doctor name</p>
            <div className="flex justify-start items-center bg-blue-100 p-1.5 rounded-xl">
              <img
                className="ml-3 w-[16px] mr-4"
                src={PhoneImage}
                alt="Phone"
              />
              Dr. Sushant Singh Rajput
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            <Link to="/">View Documents</Link>
          </button>
        </div>
      </div>
      <div className="w-[60%] h-[700px] p-5 flex flex-col justify-start items-center border rounded-3xl overflow-y-auto">
        <h1 className="font-bold text-[16px] mb-4">Prescription</h1>
        <div className="w-full bg-slate-100 p-5 rounded-3xl mb-5">
          <div className="mb-3">
            <label
              htmlFor="tablet"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Tablet 1
            </label>
            <input
              type="tablet"
              name="tablet"
              id="tablet"
              value=""
              onChange={() => {}}
              placeholder="Enter tablet name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex justify-between items-start">
            <p className="font-medium">Doses</p>
            <div className="flex flex-col justify-start items-center">
              <div className="flex justify-center items-center gap-10">
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Morning
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Afternoon
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Evening
                  </label>
                </div>
              </div>
              <div className="flex justify-start items-center gap-10">
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Before meal
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    After meal
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 mt-5">
          <button
            type="button"
            onClick={handleAdd}
            className="w-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Add
          </button>
          <button
            type="button"
            onClick={handleSend}
            className="w-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionForm;
