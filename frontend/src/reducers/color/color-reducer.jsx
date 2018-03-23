import { COLOR_ACTION_TYPES } from './../../constants/action-types';
import initialState from "./initialState";

export default function colorReducer(state = initialState, action) {
  switch (action.type) {

    case COLOR_ACTION_TYPES.CHANGE_COLOR:
      return {...state, color: action.payload};

    default:
      return state;

  }

}
