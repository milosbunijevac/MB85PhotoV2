import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  myValue: 0,
});

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function modelReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.payload;
    default:
      return state;
  }
}

export default modelReducer;
