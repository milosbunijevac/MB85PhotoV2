const initialState = {
  direction: 'row',
  justify: 'flex-end',
  alignItems: 'flex-start',
  value: 0,
};

const navBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'routeValue':
      if (action.payload) {
        return action.payload;
      }
      return state;
    default:
      return state;
  }
};

export default navBarReducer;
