import { createStore } from 'redux';
import reducers from './reducers'
import data from './tickets.json'

const initialState = {
  data: data.tickets,
  showData: data.tickets,
  currency: 'rub'
};

const store = createStore(reducers, initialState);

export default store;