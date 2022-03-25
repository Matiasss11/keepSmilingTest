import { getDentists } from "../services/dentist";
import * as ACTIONS from "./actions";
export const tryGetDentists = () => {
    return async (dispatch, getState) => {
        const response = await getDentists();
        console.log('tryGetDentists',response);
        dispatch(ACTIONS.getDentistsSuccess(response));
    };
};