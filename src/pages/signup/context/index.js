import axios from "axios";
import APP_HOST from "../../../configs/envVariables";

export const register = async (data) => {
    const body = {
        fullName: data.name,
        email: data.email,
        mobile: data.number,
        type: data.speciality,
        password: data.password,
        role: data.role
    }

    try {
        const headers = {
          "Content-Type": "application/json",
        };
    
        const response = await axios.post(
          `${APP_HOST}/user/register`,
          JSON.stringify(body),
          { headers }
        );

        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error.message);
        throw error;
      }
}
