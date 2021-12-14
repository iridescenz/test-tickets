import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Checkbox = ({ id, value, setView, stopsV }) => {
  const dispatch = useDispatch()
  const stops = useSelector((state) => state.stop)
  console.log(stops, stopsV)
  return (
    <div>
      <input
        type='checkbox'
        checked={stops.includes(stopsV)}
        id={id}
        onChange={() => {}}
        onClick={() => dispatch(setView())}
      />
      <label htmlFor={id}> {value}</label>
    </div>
  )
}

