export const reducers = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENCY':
      return {
        ...state,
        currency: action.payload,
      }
    case 'SET_VIEW': {
      const updatedStops = (() => {
        if (action.payload === 'all') {
          return state.stop.includes('all') ? [] : ['all']
        }
        else if (state.stop.includes('all')) {
          return [...state.stop.filter((value) => value !== 'all'), action.payload]
        }
        else  {
            return state.stop.includes(action.payload)
          ? state.stop.filter((value) => value !== action.payload)
          : [...state.stop, action.payload]
        }

      })()

      return {
        ...state,
        stop: updatedStops,
      }
    }
    default:
      return state
  }
}

export const setCurrency = (payload) => {
  return {
    type: 'SET_CURRENCY',
    payload,
  }
}


export const setView = (payload) => {
  return {
    type: 'SET_VIEW',
    payload,
  }
}
