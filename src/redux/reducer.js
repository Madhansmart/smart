let initialState = {
  activeMenuItem: 'dashboard'
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_MENUITEM':
      state = {
        ...state,
        activeMenuItem: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

export default reducer;
