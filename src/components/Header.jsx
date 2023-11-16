import React from 'react'

import logoImg from './../assets/quiz-logo.png';

const Header = () => {
  return (
    <header>
      <img src={logoImg} alt='Qui logo' />
      <h1>ReactQuize</h1>
    </header>
  )
}

export default Header