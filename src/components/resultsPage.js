import React from 'react'
import Ticket from './Ticket'
import { useSelector } from 'react-redux'
import { showCurrency } from './helpers'

function ResultsPage() {
  const currency = useSelector((state) => state.currency)
  const stop = useSelector((state) => state)
  console.log(stop)

  let data = useSelector(({ view, data, stop }) => {
    if (view === 'all' || stop.length === 0) {
      return data
    }
      return data.filter((ticket) => stop.includes(ticket.id))
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
