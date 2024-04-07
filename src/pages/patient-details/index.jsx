import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileImage from "../../assets/ProfileImage.svg";
import PhoneImage from "../../assets/Phone.svg";
import { getPatientDetails, healthDetails, patientDetails } from "./context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getLocalStorageValueForKey } from "../../utils/localStorage";
import UserContext from "../../context/UserContext";

const PatientDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [patient, setPatient] = useState();
  const [formData, setFormData] = useState({
    BP: "",
    sugar: "",
    symptoms: "",
    diagnosis: "",
    notes: "",
    docid: "",
    patientid: "",
    appointmentDate: new Date(),
  });

  const handleSubmit = async (e) => {
    const patientId = getLocalStorageValueForKey("patientId");
    e.preventDefault();
    const data = {
      BP: formData.BP,
      sugar: formData.sugar,
      symptoms: formData.symptoms,
      diagnosis: formData.diagnosis,
      notes: formData.notes,
      docid: user.id,
      patientid: patientId,
      appointmentDate: formData.appointmentDate,
    };
    try {
      // Call the healthDetails function from your context file
      await healthDetails(data);
      // Assuming success, navigate to the desired route
      navigate("/prescription");
    } catch (error) {
      console.error("Error:", error);
      // Handle error if needed
    }
  };

  const handleGetPatientDetails = async () => {
    const patientId = getLocalStorageValueForKey("patientId");
    const data = {
      patientId: patientId,
    };
    const res = await getPatientDetails(data);
    setPatient(res);
  };

  useEffect(() => {
    handleGetPatientDetails();
  }, []);

  return (
    <div className="mt-[100px] h-full flex justify-center items-center gap-10">
      {patient ? (
        <div className="flex flex-col justify-center items-center border rounded-3xl p-10 gap-5">
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="font-bold text-[20px]">Patient Information</h1>
            <img src={ProfileImage} alt="Profile" />
            <p className="font-bold text-[16px]">{patient.fullName}</p>
            <p>Last Visited: 21 March 2024 </p>
            <div className="flex justify-center items-center gap-8">
              <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl">
                <h1>Age</h1>
                <p>{patient.age}</p>
              </div>
              <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl">
                <h1>Gender</h1>
                <p>{patient.gender}</p>
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
                {patient.phone}
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p>Email Id</p>
              <div className="flex justify-start items-center bg-blue-100 p-1.5 rounded-xl">
                <img
                  className="ml-3 w-[16px] mr-4"
                  src={PhoneImage}
                  alt="Phone"
                />
                {patient.email}
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
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
      ) : (
        <>No Patient found</>
      )}
      <div className="w-[60%] h-[700px] p-5 flex flex-col justify-start items-center border rounded-3xl overflow-y-auto">
        <h1 className="font-bold text-[16px] mb-4">Patient Health Details</h1>
        <form className="w-full space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="flex gap-8">
            <div>
              <label
                htmlFor="BP"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                BP
              </label>
              <input
                type="text"
                name="BP"
                id="BP"
                value={formData.BP}
                onChange={(e) =>
                  setFormData({ ...formData, BP: e.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Enter BP"
              />
            </div>
            <div>
              <label
                htmlFor="sugar"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Sugar
              </label>
              <input
                type="text"
                name="sugar"
                id="sugar"
                value={formData.sugar}
                onChange={(e) =>
                  setFormData({ ...formData, sugar: e.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Enter sugar"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="symptoms"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Symptoms
            </label>
            <input
              type="text"
              name="symptoms"
              id="symptoms"
              value={formData.symptoms}
              onChange={(e) =>
                setFormData({ ...formData, symptoms: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Enter symptoms"
            />
          </div>
          {/* Div for Diagnosis */}
          <div>
            <label
              htmlFor="diagnosis"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Diagnosis
            </label>
            <input
              type="text"
              name="diagnosis"
              id="diagnosis"
              value={formData.diagnosis}
              onChange={(e) =>
                setFormData({ ...formData, diagnosis: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Enter Diagnosis"
            />
          </div>

          <div>
            <label
              htmlFor="notes"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Enter Additional Notes
            </label>
            <input
              type="text"
              name="notes"
              id="notes"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Enter Additional Notes"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="appointmentDate"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Appointment Date and Time
            </label>
            <DatePicker
              selected={formData.appointmentDate}
              onChange={(date) =>
                setFormData({ ...formData, appointmentDate: date })
              }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholderText="Select appointment date and time"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Prescription
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientDetails;
