import axios from "axios";
import APP_HOST from "../../../configs/envVariables";

export const getPatientList = async () => {
  try {
    const response = await axios.get(`${APP_HOST}/api/v1/patient/patientList/660ce6fdba94d82ae9665f70`);
    return response.data.patients;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
