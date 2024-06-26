import axios from "axios";
import APP_HOST from "../../../configs/envVariables";

export const healthDetails = async (data) => {
  const body = {
    BP: data.BP,
    sugar: data.sugar,
    symptoms: data.symptoms,
    diagnosis: data.diagnosis,
    notes: data.notes,
    appointmentDate: data.appointmentDate,
    docid: data.docid,
    patientid: data.patientid,
  };
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await axios.post(
      `${APP_HOST}/api/v1/patient/healthDetails`,
      JSON.stringify(body),
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const patientDetails = async () => {
  try {
    const response = await axios.get(`${APP_HOST}/api/v1/user/All`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const getPatientDetails = async (data) => {
  const body = {
    patientID: data.patientId,
  };
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await axios.post(
      `${APP_HOST}/api/v1/patient/getPatient`,
      JSON.stringify(body),
      { headers }
    );

    return response.data.patients[0];
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
