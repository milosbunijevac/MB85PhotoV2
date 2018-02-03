import { fromJS } from 'immutable';

const initialState = {
  direction: 'row',
  justify: 'flex-end',
  alignItems: 'flex-start',
  value: 0,
};

function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case 'routeValue':
      if (action.payload) {
      state = action.payload;
    }
      return state;
    default:
      return state;
  }
}

export default navBarReducer;
