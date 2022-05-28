import React from 'react'

const QuoteButton = ({color, handlerQuote}) => {

  return (
    <button className='card-btn' onClick={handlerQuote} style={{backgroundColor: `${color}`, boxShadow: `6px 1px 30px 2px ${color}`}}>Next</button>
  )
}

export default QuoteButton