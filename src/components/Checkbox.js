import React from 'react'

const Checkbox = () => {
  return (
    <div className='stops-value'>
    <h3 className='page-header'>Количество пересадок</h3>
      <div>
        <input type='checkbox' id='cb1' /> <label for='cb1'> Все</label>
      </div>
      <div>
        <input type='checkbox' id='cb2' /> <label for='cb2'>1 пересадка</label>
      </div>
      <div>
        <input type='checkbox' id='cb3' /> <label for='cb3'>2 пересадки</label>
      </div>
      <div>
        <input type='checkbox' id='cb4' /> <label for='cb4'>3 пересадки</label>
      </div>
    </div>
  )
}

export default Checkbox
