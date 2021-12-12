import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'
import { setCurrency } from '../redux/reducers'

const currencyValues = [
  { id: 234, value: 'rub', action: setCurrency('rub') },
  { id: 2345, value: 'euro', action: setCurrency('euro') },
  { id: 23456, value: 'usd', action: setCurrency('usd') },
]

const Currency = () => {
  const dispatch = useDispatch()
  return (
    <div className='currency'>
      <h3 className='page-header'>Валюта</h3>
      <ButtonGroup size='sm'>
        {currencyValues.map((val) => (
          <Button key={val.id} onClick={() => dispatch(val.action)}>
            {val.value}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  )
}

export default Currency
