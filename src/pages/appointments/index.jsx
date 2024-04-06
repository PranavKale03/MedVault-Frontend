import React from "react";

const Appointments = () => {
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
      <div className="w-full flex justify-around items-center bg-blue-100 p-3 rounded-xl gap-4">
        <p>Pranav Kale</p>
        <p>21 April 2024</p>
        <p>7030240803</p>
      </div>
      <div className="w-full flex justify-around items-center bg-blue-100 p-3 rounded-xl gap-4">
        <p>Pranav Kale</p>
        <p>21 April 2024</p>
        <p>7030240803</p>
      </div>
      <div className="w-full flex justify-around items-center bg-blue-100 p-3 rounded-xl gap-4">
        <p>Pranav Kale</p>
        <p>21 April 2024</p>
        <p>7030240803</p>
      </div>
      <div className="w-full flex justify-around items-center bg-blue-100 p-3 rounded-xl gap-4">
        <p>Pranav Kale</p>
        <p>21 April 2024</p>
        <p>7030240803</p>
      </div>
      <div className="w-full flex justify-around items-center bg-blue-100 p-3 rounded-xl gap-4">
        <p>Pranav Kale</p>
        <p>21 April 2024</p>
        <p>7030240803</p>
      </div>
      {/* {patients ? (
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
      )} */}
    </div>
  );
};

export default Appointments;
