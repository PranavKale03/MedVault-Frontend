import axios from "axios";
import APP_HOST from "../../../configs/envVariables";

export const healthDetails = async (data) => {

    const {user}=useContext(UserContext);
    const body = {
        BP: data.BP,
        sugar: data.sugar,
        symptoms:data.symptoms,
        diagnosis:data.diagnosis,
        notes:data.notes,
        appointmentDate:data.appointmentDate,
        // docid:user.id,
		// patientid:"66119775e658822f20f8a592"
    }
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
}

export const patientDetails = async () => {
    try {
        const response = await axios.get(
          `${APP_HOST}/api/v1/user/All`,
        );
            console.log(response);
        return response.data;
      } catch (error) {
        console.error(error.message);
        throw error;
      }
}