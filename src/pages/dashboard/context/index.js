import axios from "axios";
import APP_HOST from "../../../configs/envVariables";

export const getPatients = async () => {
  try {
    const response = await axios.get(`${APP_HOST}/api/v1/patient/allPatient`);
    return response.data.patients;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
