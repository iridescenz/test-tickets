import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../store'
import { connect } from 'react-redux';


const Currency = () => {
  return (
    <div className='currency'>
       <h3 className='page-header'>Валюта</h3>
    <ButtonGroup size="sm">
    <Button onClick={() => store.dispatch({type: 'SET_CURRENCY_RUB'})}>rub</Button>
    <Button onClick={() => store.dispatch({type: 'SET_CURRENCY_USD'})}>usd</Button>
    <Button onClick={() => store.dispatch({type: 'SET_CURRENCY_EURO'})}>eur</Button>
  </ButtonGroup>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    showData: state.showData,
    data: state.data,
    currency: state.currency
  };
};
export default connect(mapStateToProps)(Currency)
