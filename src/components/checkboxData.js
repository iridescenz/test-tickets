import { setView } from '../redux/reducers'

export const checkbox = [
  { id: 'cb1', value: 'Все', actionCreator: () => setView('cb1') },
  { id: 'cb0', value: 'Без пересадок', actionCreator: () => setView('cb0') },
  { id: 'cb2', value: '1 пересадка', actionCreator: () => setView('cb2') },
  { id: 'cb3', value: '2 пересадки', actionCreator: () => setView('cb3') },
  { id: 'cb4', value: '3 пересадки', actionCreator: () => setView('cb4') },
]
