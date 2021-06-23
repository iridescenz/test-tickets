import React from 'react'
import store from '../store'

const Checkbox = () => {
  return (
    <div className='stops-value'>
    <h3 className='page-header'>Количество пересадок</h3>
      <div>
        <input type='checkbox' id='cb1' onClick={() => store.dispatch({type: 'NO_FILTER'})}/> <label htmlFor='cb1'> Все</label>
      </div>
      <div>
        <input type='checkbox' id='cb0' onClick={() => store.dispatch({type: 'FILTER_BY_STOPS',payload: 0})} /> <label htmlFor='cb0'> Без пересадок</label>
      </div>
      <div>
        <input type='checkbox' id='cb2' onClick={() => store.dispatch({type: 'FILTER_BY_STOPS',payload: 1})} /> <label htmlFor='cb2'>1 пересадка</label>
      </div>
      <div>
        <input type='checkbox' id='cb3' onClick={() => store.dispatch({type: 'FILTER_BY_STOPS',payload: 2})} /> <label htmlFor='cb3'>2 пересадки</label>
      </div>
      <div>
        <input type='checkbox' id='cb4' onClick={() => console.log(store.getState().showData.tickets)} /> <label htmlFor='cb4'>3 пересадки</label>
      </div>
    </div>
  )
}

export default Checkbox
