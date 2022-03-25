import * as CONSTANTS from './actionTypes';

const initialState = {
  dentist: [],
};

const DentistReducer = (state = initialState, action) => {
  switch (action.type) {

    case CONSTANTS.GET_DENTISTS : {
      return {
        ...state,
        dentist: action.payload.data
      }
    }
    
    default: {
        return state;
    }
  }
};

export default DentistReducer;

export const getDentistState = (state) => state.DentistReducer;

export const getDentist = (state) => getDentistState(state).dentist;