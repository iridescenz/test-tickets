import React from 'react'
import data from '../tickets.json'
import Ticket from './Ticket'

function ResultsPage() {
  const results = data.tickets.map((el) => {
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
        price={el.price}
        stops={el.stops}
      />
    )
  })
  return <div className='results'>{results}</div>
}

export default ResultsPage
