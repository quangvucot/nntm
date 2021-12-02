import {
  CREATE_FARMS_FAIL,
  CREATE_FARMS_LOADING,
  CREATE_FARMS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInterceptor";
export default (form) => (dispatch) => (onSuccess) => {
  const requesPayload = {
    country_code: form.country_code,
    first_name: form.first_name || "",
    last_name: form.last_name || "",
    phone_number: form.phone_number || "",
    contact_picture: form.contact_picture || null,
    is_favorite: form.is_favorite || false,
  };
  dispatch({
    type: CREATE_FARMS_LOADING,
  });
  axios
    .post("/farm/", requesPayload)
    .then((res) => {
      dispatch({
        type: CREATE_FARMS_SUCCESS,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_FARMS_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "some thing went wrong, try again" },
      });
    });
};
