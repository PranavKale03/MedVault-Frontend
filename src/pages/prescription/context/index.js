import axios from "axios";
import APP_HOST from "../../../configs/envVariables";

export const addPrescription = async (data) => {
  const body = {
    medicine_names: data.medicine_names,
    doses: data.doses,
    doc_id: data.doc_id,
    patient_id: data.patient_id,
    duration: "10",
  };
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await axios.post(
      `${APP_HOST}/api/v1/patient/submitPresciption`,
      JSON.stringify(body),
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const getPatients = async () => {
  try {
    const response = await axios.get(`${APP_HOST}/api/v1/user/All`);
    return response.data.users;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const sendMail = async (id) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await axios.post(`${APP_HOST}/api/v1/send/email/${id}`, {
      headers,
    });

    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
