import axios from "axios";
import APP_HOST from "../../../configs/envVariables";

export const getPatientList = async (id) => {
  try {
    const response = await axios.get(`${APP_HOST}/api/v1/patient/patientList/${id}`);
    return response.data.patients;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
