import * as Actions from './color-actions.jsx';
import * as ActionTypes from './../../constants/action-types';

describe('Color actions', () => {
  it('should create an action to change color', () => {
    const color = 'yellow';
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.COLOR_ACTION_TYPES.CHANGE_COLOR,
      payload: color
    }
    // we expect this to return a function since it is a thunk
    expect(typeof (Actions.changeColor(color))).toEqual('function');

    // call + check whether we get the right response
    Actions.changeColor(color)(dispatch);
    expect(dispatch).toBeCalledWith(expected);

  });

});
