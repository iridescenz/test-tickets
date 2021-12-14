import React from 'react'
import Ticket from './Ticket'
import { useSelector } from 'react-redux'
import { showCurrency } from './helpers'
import {checkbox} from './checkboxData'

function ResultsPage() {
  const currency = useSelector((state) => state.currency)
  let stop = useSelector((state) => state.stop)

  let data = useSelector(({ data, stop }) => {
    if (stop.length === 0) {
      return data
    }
      return data.filter(ticket => {
        stop.includes(String(ticket.stops))})
  })

  const results = data
    .sort((a, b) => a.price - b.price)
    .map((ticket) => {
      return (
        <Ticket
          key={`${ticket.origin_name}, ${ticket.departure_time}, ${ticket.carrier}`}
          origin={ticket.origin}
          originName={ticket.origin_name}
          destination={ticket.destination}
          destinationName={ticket.destination_name}
          depatureDate={ticket.departure_date}
          depatureTime={ticket.departure_time}
          arrivalDate={ticket.arrival_date}
          arrivalTime={ticket.arrival_time}
          carrier={ticket.carrier}
          price={showCurrency(currency, ticket.price)}
          stops={ticket.stops}
        />
      )
    })
  return <div className='results'>{results}</div>
}

export default ResultsPage
