import { setView } from '../redux/reducers'

export const checkbox = [
  { id: 'cb1', value: 'Все', actionCreator: () => setView('all'), stopsV: 'all' },
  { id: 'cb0', value: 'Без пересадок', actionCreator: () => setView('0'), stopsV: '0' },
  { id: 'cb2', value: '1 пересадка', actionCreator: () => setView('1'), stopsV: '1' },
  { id: 'cb3', value: '2 пересадки', actionCreator: () => setView('2'), stopsV: '2' },
  { id: 'cb4', value: '3 пересадки', actionCreator: () => setView('3'), stopsV: '3' },
]
