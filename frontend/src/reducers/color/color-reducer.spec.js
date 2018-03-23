// import * as ActionTypes from '../constants/actionTypes';
import reducer from './color-reducer.jsx';
import initialState from './initialState';
import { COLOR_ACTION_TYPES } from './../../constants/action-types';

describe('Reducers-color-reducer', () => {

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    expect(reducer(undefined, action)).toEqual(initialState);
  });

  it(`should handle ${COLOR_ACTION_TYPES.CHANGE_COLOR}`, () => {

    const payload = 'yellow';
    const action = { type: COLOR_ACTION_TYPES.CHANGE_COLOR, payload: payload };
    const result = Object.assign(initialState, { color: payload })

    expect(reducer(initialState, action)).toEqual(result);

  });

});
