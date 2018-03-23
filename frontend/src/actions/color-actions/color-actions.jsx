import {COLOR_ACTION_TYPES} from './../../constants/action-types';

export function changeColor(color) {
  return (dispatch) => {
      dispatch({type: COLOR_ACTION_TYPES.CHANGE_COLOR, payload: color});
  };
}

