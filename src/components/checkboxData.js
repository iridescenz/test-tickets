import {
  setAllView,
  setOneStopView,
  setTwoStopsView,
  setThreeStopsView,
  setNoStopsView,
} from '../redux/reducers'

export const checkbox = [
  { id: 'cb1', value: 'Все', reducer: setAllView },
  { id: 'cb0', value: 'Без пересадок', reducer: setNoStopsView },
  { id: 'cb2', value: '1 пересадка', reducer: setOneStopView },
  { id: 'cb3', value: '2 пересадки', reducer: setTwoStopsView },
  { id: 'cb4', value: '3 пересадки', reducer: setThreeStopsView },
]
