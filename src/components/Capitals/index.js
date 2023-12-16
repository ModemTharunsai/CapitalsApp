import React from 'react'
import './index.css'

const CapitalItem = props => {
  const {capitalDisplayText, country} = props

  return (
    <li className="capital-item">
      <p className="capital-text">{capitalDisplayText}</p>
      <p className="country-text">{country}</p>
    </li>
  )
}

export default CapitalItem
