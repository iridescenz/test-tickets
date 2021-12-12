import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Checkbox = ({ id, value, setView }) => {
  const dispatch = useDispatch()
  const stops = useSelector((state) => state.stop)
  console.log(stops, id)
  return (
    <div>
      <input
        type='checkbox'
        checked={stops.includes(id)}
        id={id}
        onChange={() => {}}
        onClick={() => dispatch(setView())}
      />
      <label htmlFor={id}> {value}</label>
    </div>
  )
}

