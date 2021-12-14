import React from 'react'
import { checkbox } from './checkboxData'
import { Checkbox } from './Checkbox'

const Checkboxes = () => {
  return (
    <div className='stops-value'>
      <h3 className='page-header'>Количество пересадок</h3>
      {checkbox.map((checkbx) => (
        <Checkbox
          key={checkbx.id}
          id={checkbx.id}
          value={checkbx.value}
          setView={checkbx.actionCreator}
          stopsV={checkbx.stopsV}
        />
      ))}
    </div>
  )
}

export default Checkboxes
