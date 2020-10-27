import React from 'react'
import { checkPropTypes } from 'prop-types'

const Airline = props => {
  return(
    <div>{props.airline.name}</div>
  )
}

export default Airline