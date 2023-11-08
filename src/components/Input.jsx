import React from 'react'

const Input = ({ lable, textarea, ...props }) => {
  return (
    <p>
      <label htmlFor="">{lable}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  )
}

export default Input