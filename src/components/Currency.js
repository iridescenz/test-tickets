import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


const Currency = () => {
  return (
    <div className='currency'>
       <h3 className='page-header'>Валюта</h3>
    <ButtonGroup size="sm">
    <Button>rub</Button>
    <Button>usd</Button>
    <Button>eur</Button>
  </ButtonGroup>
    </div>
  )
}

export default Currency
