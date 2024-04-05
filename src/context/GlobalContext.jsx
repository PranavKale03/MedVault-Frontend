import axios from "axios";
import APP_HOST from "../configs/envVariables.js";

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${APP_HOST}/api/v1/user/doctor/${id}`);
    console.log(response.data.user);
    return response.data.user;
  } catch (error) {
    console.error(error.message);
  }
};
