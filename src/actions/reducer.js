const initState = {
    username: '',
    user: {}
};
  
  export default (state = initState, action) => {
    switch (action.type) {
      case "SET_USERNAME": {
        return {
          ...state,
          username: state.username.concat(action.username)
        };
      }
      case "SET_USER": {
        return {
          ...state,
          user: state.user = action.user
        };
      }
      default: {
        return state;
      }
    }
  };
  