import axios from "axios";
import APP_HOST from "../../../configs/envVariables";

export const login = async (data) => {
    const body = {
        email: data.email,
        password: data.password
    }
    try {
        const headers = {
          "Content-Type": "application/json",
        };
    
        const response = await axios.post(
          `${APP_HOST}/api/v1/user/login`,
          JSON.stringify(body),
          { headers }
        );
    
        return response.data;
      } catch (error) {
        console.error(error.message);
        throw error;
      }
}
