import React from 'react'
import Button from './Button'
import { IoIosAirplane } from 'react-icons/io'

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
    <div className='ticket' style={{ border: '1px solid grey' }}>
      <div className='left'>
        <img
          src={`./logos/${carrier}.png`}
          alt={carrier}
        />
        <Button text='Купить' text2= {`за ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`} />
      </div>
      <div className='right'>
        <div className='depature'>
          <h2>{depatureTime}</h2>
          <div>{`${origin}, ${originName}`}</div>
          <div className='date'>{depatureDate}</div>
        </div>
        <div className='stops'>
          <div>
            {stops > 0
              ? stops === 1
                ? ` ${stops} пересадка`
                : `${stops} пересадки`
              : 'без пересадок'}
          </div>
          <div className='plane-line'>
            {' '}
            <div className='line'></div>
            <div className='plane-icon'>
              <IoIosAirplane />
            </div>
          </div>
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
