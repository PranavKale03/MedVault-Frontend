import React, { useContext, useEffect, useState } from "react";
import ProfileImage from "../../assets/ProfileImage.svg";
import PhoneImage from "../../assets/Phone.svg";
import { Link } from "react-router-dom";
import { addPrescription, getPatients, sendMail } from "./context";
import UserContext from "../../context/UserContext";
import { getLocalStorageValueForKey } from "../../utils/localStorage";

const PrescriptionForm = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const { user } = useContext(UserContext);

  const handleAdd = () => {
    setPrescriptions([
      ...prescriptions,
      { tablet: "", timeDoses: [], mealDoses: [] },
    ]);
  };
  const handleSend = async () => {
    const patientId = getLocalStorageValueForKey("patientId");

    // Assuming addPrescription is an async function
    try {
      for (const prescription of prescriptions) {
        const doses = `${prescription.timeDoses.join(
          ", "
        )}, ${prescription.mealDoses.join(", ")}`;
        const data = {
          medicine_names: prescription.tablet,
          doses: doses,
          doc_id: user.id,
          patient_id: patientId,
          duration: "10",
        };
        await addPrescription(data);
      }
      const res = await sendMail(patientId);
    } catch (error) {
      console.error("Error adding prescription:", error);
    }
  };

  const handleTabletChange = (index, value) => {
    const updatedPrescriptions = [...prescriptions];
    updatedPrescriptions[index].tablet = value;
    setPrescriptions(updatedPrescriptions);
  };

  const handleTimeDoseChange = (index, dose) => {
    const updatedPrescriptions = [...prescriptions];
    if (updatedPrescriptions[index].timeDoses.includes(dose)) {
      updatedPrescriptions[index].timeDoses = updatedPrescriptions[
        index
      ].timeDoses.filter((item) => item !== dose);
    } else {
      updatedPrescriptions[index].timeDoses.push(dose);
    }
    setPrescriptions(updatedPrescriptions);
  };

  const handleMealDoseChange = (index, dose) => {
    const updatedPrescriptions = [...prescriptions];
    if (updatedPrescriptions[index].mealDoses.includes(dose)) {
      updatedPrescriptions[index].mealDoses = updatedPrescriptions[
        index
      ].mealDoses.filter((item) => item !== dose);
    } else {
      updatedPrescriptions[index].mealDoses.push(dose);
    }
    setPrescriptions(updatedPrescriptions);
  };

  const handlePatientFetch = async () => {
    const res = await getPatients();
  };

  useEffect(() => {
    handlePatientFetch();
  }, []);

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
        {prescriptions.map((prescription, index) => (
          <div key={index} className="w-full bg-slate-100 p-5 rounded-3xl mb-5">
            <div className="mb-3">
              <label
                htmlFor={`tablet-${index}`}
                className="block mb-2 text-md font-medium text-gray-900"
              >
                Tablet {index + 1}
              </label>
              <input
                type="text"
                name={`tablet-${index}`}
                id={`tablet-${index}`}
                value={prescription.tablet}
                onChange={(e) => handleTabletChange(index, e.target.value)}
                placeholder="Enter tablet name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex justify-between items-start">
              <p className="font-medium">Time Doses</p>
              <div className="flex flex-col justify-start items-center">
                {["Morning", "Afternoon", "Evening"].map((dose) => (
                  <div key={dose} className="flex items-center mb-4">
                    <input
                      id={`time-dose-${index}-${dose}`}
                      type="checkbox"
                      checked={prescription.timeDoses.includes(dose)}
                      onChange={() => handleTimeDoseChange(index, dose)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`time-dose-${index}-${dose}`}
                      className="ms-2 text-sm font-medium text-gray-900"
                    >
                      {dose}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-start">
              <p className="font-medium">Meal Doses</p>
              <div className="flex flex-col justify-start items-center">
                {["Before meal", "After meal"].map((dose) => (
                  <div key={dose} className="flex items-center mb-4">
                    <input
                      id={`meal-dose-${index}-${dose}`}
                      type="checkbox"
                      checked={prescription.mealDoses.includes(dose)}
                      onChange={() => handleMealDoseChange(index, dose)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`meal-dose-${index}-${dose}`}
                      className="ms-2 text-sm font-medium text-gray-900"
                    >
                      {dose}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
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
