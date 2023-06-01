import React from 'react'
import './header.css';
import ai from '../../assets/logo1.jpg';

const Header = () => {
  return (
    <>
      <header className='gbt__header section__padding' id='home'>
      <div className='gbt__header-content'>
        <h1 className='scale-up-center'>Little Lemon</h1>
        <p>we are a family owned resturent.Focus on traditional recipes serve with the twist we are a family owned resturent.Focus on traditional recipes serve with the twist</p>
        <div className='gbt__header-content__input'>
          <button type='submit' >Get Started</button>
        </div>
      </div>
      <div className='gbt__header-img scale-up-center'>
        <img src={ai} alt='ai' />
      </div>
    </header>
    </>
  )
}

export default Header
