import React from 'react'
import { useDispatch } from 'react-redux'

export const Checkbox = ({ id, value, reducer }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <input type='checkbox' id={id} onClick={() => dispatch(reducer())} />
      <label htmlFor={id}> {value}</label>
    </div>
  )
}
