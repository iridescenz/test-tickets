function reducers(state, action) {
  switch (action.type) {
    case 'FILTER_BY_STOPS':
      return {
        ...state, 
        showData: state.data.map(el => el.stops === action.payload)
      };
      case 'NO_FILTER':
        return {
          ...state.data,
          showData: state.data
        };
      default:
      return state;
    }
   
  }

  export default reducers