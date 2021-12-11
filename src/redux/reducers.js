export const reducers = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENCY':
      return {
        ...state,
        currency: action.payload,
      }
    case 'SET_VIEW':
      return {
        ...state,
        view: action.payload,
        stop: action.payload !== 'all' ? (state.stop.includes(action.payload)
          ? state.stop.filter((value) => value !== action.payload)
          : [...state.stop, action.payload]) : [...state.stop],
      }
    default:
      return state
  }
}

export const setEuro = () => {
  return {
    type: 'SET_CURRENCY',
    payload: 'euro',
  }
}

export const setRuble = () => {
  return {
    type: 'SET_CURRENCY',
    payload: 'rub',
  }
}

export const setDollar = () => {
  return {
    type: 'SET_CURRENCY',
    payload: 'usd',
  }
}

export const setAllView = () => {
  return {
    type: 'SET_VIEW',
    payload: 'all',
  }
}

export const setOneStopView = () => {
  return {
    type: 'SET_VIEW',
    payload: 1,
  }
}
export const setTwoStopsView = () => {
  return {
    type: 'SET_VIEW',
    payload: 2,
  }
}

export const setThreeStopsView = () => {
  return {
    type: 'SET_VIEW',
    payload: 3,
  }
}
export const setNoStopsView = () => {
  return {
    type: 'SET_VIEW',
    payload: 0,
  }
}
