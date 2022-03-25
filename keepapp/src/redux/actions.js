import * as CONSTANTS from './actionTypes';

export const getDentistsSuccess = (data) => ({
    type: CONSTANTS.GET_DENTISTS,
    payload: {
      data
    }
  });