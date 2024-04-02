import axios from "axios";
import APP_HOST from "../configs/envVariables.js";

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${APP_HOST}/api/user/${id}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
