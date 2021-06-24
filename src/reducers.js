function reducers(state, action) {
  switch (action.type) {
    case 'FILTER_BY_STOPS':
      return {
        ...state, 
        showData: state.data.filter(el => el.stops === +action.payload)
      };
      case 'SHOW_ALL':
        return {
          ...state,
          showData:state.data
        };
      case 'SET_CURRENCY_EURO': 
        return {
          ...state,
          currency: 'eur'
        };
      case 'SET_CURRENCY_RUB':
        return {
          ...state,
          currency: 'rub'
      };
      case 'SET_CURRENCY_USD': 
        return {
          ...state,
          currency: 'usd'
      };
      default:
      return state;
    }
   
  }

  export default reducers