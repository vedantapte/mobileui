import initialState from '../initialState';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        email: action.payload.email,
        role: action.payload.role,
      };
    case 'LOGOUT':
      return {
        ...state,
        email: '',
        role: '',
      };
    default:
      return state;
  }
};

export default userReducer;
