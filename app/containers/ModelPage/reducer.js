import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  myValue: 0,
});

export const RECEIVE_POSTS = 'RECEIVE_ModelPagePOSTS';

function modelPageReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      console.log('Hit the modelPage name condition');
      return state.set('modelInfo', action.payload);
    default:
      return state;
  }
}

export default modelPageReducer;
