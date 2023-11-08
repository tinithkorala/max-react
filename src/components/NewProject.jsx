import React from 'react'
import Input from './Input'

const NewProject = () => {
  return (
    <div>
      <menu>
        <li><button>Cancel</button></li>
        <li><button>Save</button></li>
      </menu>
      <div>
        <Input lable="Title" />
        <Input lable="Description" textarea />
        <Input lable="Due Date" />
      </div>
    </div>
  )
}

export default NewProject