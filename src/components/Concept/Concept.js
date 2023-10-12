import React from 'react'

function Concept(props) {
  return (
    <li className="concept">
      <img src={props.image} alt={props.image} />
      <h2>{props.title}</h2>
      <p>T{props.description}</p>
    </li>
  )
}

export default Concept