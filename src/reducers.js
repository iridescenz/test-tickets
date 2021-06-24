function reducers(state, action) {
  switch (action.type) {
    case 'FILTER_BY_STOPS':
      return {
        ...state,
        showData: state.data.filter((el) => state.filter.includes(+el.stops)),
      };
    case 'SHOW_ALL':
      return {
        ...state,
        filter: [],
        showData: state.data,
      };
      case 'NO_STOPS':
        return {
          ...state,
          filter: [0],
          showData: state.data.filter(el => el.stops === 0),
        }
    case 'SET_CURRENCY_EURO':
      return {
        ...state,
        currency: 'eur',
      }
    case 'SET_CURRENCY_RUB':
      return {
        ...state,
        currency: 'rub',
      }
    case 'SET_CURRENCY_USD':
      return {
        ...state,
        currency: 'usd',
      }
    case 'FILTER':
      return {
        ...state,
        filter: state.filter.includes(action.payload)
          ? state.filter.filter((el) => el !== action.payload)
          : [...state.filter, action.payload],
      }
    default:
      return state
  }
}

export default reducers
