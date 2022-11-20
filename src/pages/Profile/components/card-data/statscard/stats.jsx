/* eslint-disable react/prop-types */
import React from 'react'
import './statscard.css'
import PropTypes from 'prop-types'

function Statuscard({ first, second }) {
  return (
    <div className="stats__txt-wrapper">
      <div className="stats-row">
        <div className="stats-col">
          <div className="stats__value">{first.value}</div>
          <div className="stat__txt">{first.text}</div>
        </div>
        <div className="stats-col">
          <div className="stats__value">{second.value}</div>
          <div className="stat__txt">{second.text}</div>
        </div>
      </div>
    </div>
  )
}
Statuscard.protoTypes = {
  first: PropTypes.instanceOf(Object),
  second: PropTypes.instanceOf(Object)
}
export default Statuscard
