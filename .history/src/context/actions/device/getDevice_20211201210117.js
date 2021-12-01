import {
    GET_DEVICE_FAIL,
    GET_DEVICE_LOADING,
    GET_DEVICE_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInterceptor";


export default () => ({ item }) => (dispatch) => {
    dispatch({
        type: GET_DEVICE_LOADING,
    });
    axios
        .get(`/sensors/${item.deviceID}/`)
        .then((res) => {
            dispatch({
                type: GET_DEVICE_SUCCESS,
                payload: res.data.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: GET_DEVICE_FAIL,
                payload: err.response
                    ? err.response.data
                    : { error: "some thing went wrong, try again" },
            });
            console.log("errors: ", err);
        });
};
