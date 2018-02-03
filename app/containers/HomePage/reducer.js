import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  myValue: 0,
});

export const REQUEST_POSTS = 'REQUEST_StoryPagePOSTS';
export const RECEIVE_POSTS = 'RECEIVE_StoryPagePOSTS';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_StoryPageSUBREDDIT';

function HomePageReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.payload;
    default:
      return state;
  }
}

export default HomePageReducer;
