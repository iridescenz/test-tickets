import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Checkbox = ({ id, value, reducer }) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <input
        type='checkbox'
        checked={checked}
        id={id}
        onChange={() => setChecked(!checked)}
        onClick={() => dispatch(reducer())}
      />
      <label htmlFor={id}> {value}</label>
    </div>
  )
}
