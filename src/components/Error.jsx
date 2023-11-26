import React from 'react'

const Error = ({title, message}) => {
  return (
    <div className='error'>
      <div className="error-content">
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Error