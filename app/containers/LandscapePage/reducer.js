import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  myValue: 0,
});

export const RECEIVE_POSTS = 'RECEIVE_LandscapePagePOSTS';

function landscapePageReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      console.log('Hit the landscapePage name condition');
      return state.set('landscapeInfo', action.payload);
    default:
      return state;
  }
}

export default landscapePageReducer;
