import React from 'react'
import store from '../store'
import { connect } from 'react-redux'

const Checkbox = () => {
  return (
    <div className='stops-value'>
      <h3 className='page-header'>Количество пересадок</h3>
      <div>
        <input
          type='checkbox'
          id='cb1'
          onChange={() => console.log(store.getState().filter)}
          onClick={() => store.dispatch({ type: 'SHOW_ALL' })}
        />
        <label htmlFor='cb1'> Все</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='cb0'
          onClick={(e) => store.dispatch({ type: 'NO_STOPS' })}
        />
        <label htmlFor='cb0'> Без пересадок</label>
      </div>
      <div>
        <input
          type='checkbox'
          name='cbxs'
          id='cb2'
          onClick={() =>
            store.dispatch({ type: 'FILTER', payload: 1 }) &&
            store.dispatch({ type: 'FILTER_BY_STOPS', payload: 1 })
          }
        />
        <label htmlFor='cb2'>1 пересадка</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='cb3'
          onClick={() =>
            store.dispatch({ type: 'FILTER', payload: 2 }) &&
            store.dispatch({ type: 'FILTER_BY_STOPS', payload: 2 })
          }
        />{' '}
        <label htmlFor='cb3'>2 пересадки</label>
      </div>
      <div>
        <input
          type='checkbox'
          id='cb4'
          onClick={() =>
            store.dispatch({ type: 'FILTER', payload: 3 }) &&
            store.dispatch({ type: 'FILTER_BY_STOPS', payload: 3 })
          }
        />
        <label htmlFor='cb4'>3 пересадки</label>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    showData: state.showData,
    data: state.data,
    filter: state.filter,
  }
}
export default connect(mapStateToProps)(Checkbox)
