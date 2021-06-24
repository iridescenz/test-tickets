import React from 'react'
import Ticket from './Ticket'
import store from '../store'
import { connect } from 'react-redux'

function ResultsPage() {
  const currentData = store.getState().showData
  const dollarRate = 72.3
  const euroRate = 86.3
  const results = currentData
    .sort((a, b) => a.price - b.price)
    .map((el) => {
      const currency = store.getState().currency
      return (
        <Ticket
          key={`${el.origin_name}, ${el.departure_time}, ${el.carrier}`}
          origin={el.origin}
          originName={el.origin_name}
          destination={el.destination}
          destinationName={el.destination_name}
          depatureDate={el.departure_date}
          depatureTime={el.departure_time}
          arrivalDate={el.arrival_date}
          arrivalTime={el.arrival_time}
          carrier={el.carrier}
          price={
            currency === 'rub'
              ? `${el.price} ₽`
              : currency === 'usd'
              ? `${Math.ceil(el.price / dollarRate)} $`
              : `${Math.ceil(el.price / euroRate)} €`
          }
          stops={el.stops}
        />
      )
    })
  return <div className='results'>{results}</div>
}
const mapStateToProps = (state) => {
  return {
    showData: state.showData,
    data: state.data,
    currency: state.currency,
    filter: state.filter,
  }
}
export default connect(mapStateToProps)(ResultsPage)
