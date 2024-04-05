import React, { useEffect } from "react";
import { getPatients } from "./context";

const PatientList = () => {
  const getAllPatients = async () => {
    const patients = await getPatients();
  };

  useEffect(() => {
    getAllPatients();
  }, []);
  
  return <div>PatientList</div>;
};

export default PatientList;
