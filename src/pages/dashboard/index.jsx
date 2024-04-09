import React, { useContext, useEffect, useState } from "react";
import { getPatients } from "./context";
import { shortenSentence } from "../../utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { setLocalStorageValueForKey } from "../../utils/localStorage";
import UserContext from "../../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext)
  const [patients, setPatients] = useState([]);
  const [currentPatient, setCurrentPatient] = useState();
  const navigate = useNavigate();
  
  const getAllPatients = async () => {
    const patients = await getPatients();
    setPatients(patients);
    setCurrentPatient(patients[0]);
  };

  useEffect(() => {
    getAllPatients();
  }, []);

  return (
    <div className="mt-[100px] w-full flex justify-center">
      <div className="w-full flex flex-col justify-around items-center gap-5 mx-5">
        <div className="w-full flex justify-around items-center">
          <div className="p-10 flex flex-col justify-center items-center bg-slate-200 rounded-3xl">
            {currentPatient ? (
              <>
                <h1 className="font-bold text-[24px]">
                  {currentPatient.fullName}
                </h1>
                <div className="flex justify-center items-center gap-10 mt-3">
                  <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl">
                    <h1>Age</h1>
                    <p>{currentPatient.age}</p>
                  </div>
                  <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl">
                    <h1>Gender</h1>
                    <p>{currentPatient.gender}</p>
                  </div>
                </div>

                <div className="flex justify-center items-center mt-4">
                  <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center"
                    onClick={() => {
                      // navigate(`/patient-details`);
                      setLocalStorageValueForKey(
                        "patientId",
                        currentPatient._id
                      );
                    }}
                  >
                  <Link to={'/patient-details'}>

                    View
                  </Link>
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="p-10 flex flex-col justify-center items-center bg-slate-200 rounded-3xl">
            <h1 className="font-bold text-[24px]">Today Patient Count</h1>
            <h1 className="font-bold text-[36px] text-sky-500">13</h1>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <div className="w-full flex justify-around items-center gap-3">
            <div className="w-full">
              <input
                type="email"
                name="email"
                id="email"
                value=""
                onChange={() => {}}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Search..."
              />
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center"
              >
                Search
              </button>
            </div>
          </div>
          <div className="w-full flex justify-around items-center">
            <p className="text-sky-500">Patient Name</p>
            <p className="text-sky-500">Gender</p>
            <p className="text-sky-500">Age</p>
            <p className="text-sky-500">Mobile Number</p>
          </div>
          {patients ? (
            <>
              {patients.map((patient, idx) => (
                <div
                  key={idx}
                  className="w-full flex justify-around items-center bg-blue-100 p-3 rounded-xl gap-4"
                >
                  <p>{shortenSentence(patient.fullName, 6)}</p>
                  <p>{patient.gender}</p>
                  <p>{patient.age}</p>
                  <p>{patient.phone}</p>
                </div>
              ))}
            </>
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
