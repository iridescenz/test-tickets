import React from 'react'

const Checkbox = () => {
  return (
    <form className='stops-value'>
    <label>Все<input type="checkbox"/><span class="checkmark"></span></label>
    <label>1 пересадка<input type="checkbox"/><span class="checkmark"></span></label>
    <label>2 пересадки<input type="checkbox"/><span class="checkmark"></span></label>
    <label>3 пересадки<input type="checkbox"/><span class="checkmark"></span></label>
    </form>
  )
}

export default Checkbox
