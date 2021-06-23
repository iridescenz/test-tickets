import React from 'react'


const Currency = () => {
  return (
    <form  className="button-group">
 <label>
                <input type='radio' name='radio' value='rub' />
                
 rub

              </label>
              <label>
                <input type='radio' name='radio' value='usd' />
                usd
              </label>
              <label>
                <input type='radio' name='radio' value='eur' />
                eur
              </label>
  </form>
  )
}

export default Currency
