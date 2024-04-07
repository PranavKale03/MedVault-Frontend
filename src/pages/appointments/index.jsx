import React, { useEffect, useState } from "react";
import { getPatientList } from "./context";
import { toast } from "react-hot-toast";

const Appointments = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllPatients = async () => {
    try {
      setLoading(true);
      const patientsData = await getPatientList();
      setPatients(patientsData);
      toast.success("Patients loaded successfully");
    } catch (error) {
      console.error("Error fetching patient data:", error);
      toast.error("Failed to load patients");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPatients();
  }, []);

  return (
    <div className="mt-[8em] w-full flex flex-col justify-center items-center gap-5">
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
            onClick={getAllPatients}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center"
          >
            Search
          </button>
        </div>
      </div>
      <div className="w-full flex justify-around items-center">
        <p className="text-sky-500">Patient Name</p>
        <p className="text-sky-500">Appointment Date</p>
        <p className="text-sky-500">Mobile Number</p>
      </div>
      
      {loading ? (
        <div className="w-full text-center text-gray-500">Loading...</div>
      ) : (
        <>
          {patients.map((patient, idx) => (
            <div
              key={idx}
              className="w-full flex justify-around items-center bg-blue-100 p-3 rounded-xl gap-4"
            >
              <p>{patient.fullName}</p>
              <p>{formatAppointmentDate(patient.healthDetails[0].appointmentDate)}</p>
              <p>{patient.phone}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

// Function to format the appointment date
const formatAppointmentDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
};

export default Appointments;
