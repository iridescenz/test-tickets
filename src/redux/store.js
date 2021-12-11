import { createStore } from 'redux'
import { reducers } from './reducers'
import data from '../tickets.json'

const initialState = {
  data: data.tickets,
  view: 'all',
  stop: [],
  currency: 'rub',
}

export const store = createStore(reducers, initialState)
