import { createStore } from 'redux';
import reducers from './reducers'
import data from './tickets.json'

const initialState = {
  data: data,
  showData: data
};

const store = createStore(reducers, initialState);

export default store;