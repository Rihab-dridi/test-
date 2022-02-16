import axios from "axios";
import res from "express/lib/response";
import { GET_ALL } from "../action-types/contact-action-type";

//testing the api consumption
export const getAllHandler=(contacts)=>{
    return{
        type:GET_ALL,
        payload:contacts
    }
}

//read
// export const getAllHandler = () => async (dispatch) => {
//   axios.get("http://localhost:5000/api/contacts/").then((res) => {
//     dispatch({
//       type: GET_ALL,
//       payload: res.data,
//     });
//   });
// };
