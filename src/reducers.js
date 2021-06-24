function reducers(state, action) {
  switch (action.type) {
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
    case 'FILTER_BY_STOPS':
      return {
        ...state,
        showData: state.data.filter((el) => state.filter.includes(+el.stops)),
      }
    default:
      return state
  }
}

export default reducers
