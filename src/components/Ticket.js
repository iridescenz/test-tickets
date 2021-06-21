import React from 'react'
import Button from '../styled-components/Button'

function Ticket({
  origin,
  originName,
  destination,
  destinationName,
  depatureDate,
  depatureTime,
  arrivalDate,
  arrivalTime,
  carrier,
  price,
  stops,
}) {
  return (
    <div className='ticket' style={{border: '1px solid grey'}}>
      <div className='left'>
        <h1>{carrier}</h1>
        <Button text={`Купить за ${price}`} />
      </div>
      <div className='right'>
        <div className='depature'>
          <h2>{depatureTime}</h2>
          <div>{`${origin}, ${originName}`}</div>
          <div className='date'>{(depatureDate)}</div>
        </div>
        <div className='stops'>
          {stops > 0
            ? stops === 1
              ? ` ${stops} пересадка`
              : `${stops} пересадки`
            : 'без пересадок'}
        </div>
        <div className='arrival'>
          <h2>{arrivalTime}</h2>
          <div>{`${destinationName},${destination}`}</div>
          <div className='date'>{arrivalDate}</div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
