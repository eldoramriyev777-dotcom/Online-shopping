import React, { useState } from 'react'
import {
  FullWrap,
  MidAndBotJointWrap,
  NavbarAllWrap,
  NavbarBottomPartAllWrap,
  NavbarBottomWrap,
  NavbarCenterWrap,
  NavbarTopWrap
} from './navbarStyle'

import cursor from '../assets/navbar_assets/cursor.svg'
import vector_down from '../assets/navbar_assets/vector_down.svg'
import time from '../assets/navbar_assets/time.svg'
import world from '../assets/navbar_assets/world.svg'
import currency from '../assets/navbar_assets/currency.svg'
import burger from '../assets/navbar_assets/burger_logo.svg'
import blossom from '../assets/navbar_assets/BLOSSOM.svg'
import parcel from '../assets/navbar_assets/parcel.svg'
import like from '../assets/navbar_assets/like.svg'
import login from '../assets/navbar_assets/login.svg'
import search from '../assets/navbar_assets/search.svg'

import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

const NavbarComponent = () => {
  const navigate = useNavigate()
  const [fadeOut, setFadeOut] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setFadeOut(true)

    // 0.5s dan keyin loading spinner chiqadi
    setTimeout(() => {
      setLoading(true)
    }, 500)

    // 1.5s dan keyin sahifaga yo‘naltirish
    setTimeout(() => {
      navigate('/login/sign-in')
    }, 1500)
  }

  return (
    <FullWrap style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Navbar barcha qismlari */}
      <NavbarAllWrap>
        <NavbarTopWrap>
          <div className='location'>
            <img src={cursor} alt='cursor' />
            <p>Shipping location — Amsterdam</p>
            <img src={vector_down} alt='vector_down' />
          </div>
          <div className='options'>
            <p><img src={time} alt='time' /><small>How we are doing now?</small></p>
            <p><img src={world} alt='world' /><small>English</small></p>
            <p><img src={currency} alt='currency' /><small>USD</small></p>
          </div>
        </NavbarTopWrap>
      </NavbarAllWrap>

      <NavbarBottomPartAllWrap>
        <MidAndBotJointWrap>
          <NavbarCenterWrap>
            <img src={burger} alt='burger' />
            <img src={blossom} alt='blossom' />
            <div className='leftsidewrap'>
              <img src={parcel} alt='parcel' />
              <img src={like} alt='like' />
              <div className='breakline'></div>
              <p
                onClick={handleClick}
                style={{
                  cursor: 'pointer',
                  transition: 'opacity 1s ease, transform 1s ease',
                  opacity: fadeOut ? 0 : 1,
                  transform: fadeOut ? 'scale(0.95)' : 'scale(1)'
                }}
              >
                <img src={login} alt='login' />
                <small>Login</small>
              </p>
            </div>
          </NavbarCenterWrap>
          <div className='freeline'></div>
          <NavbarBottomWrap>
            <div>
              <p>Ideas</p>
              <p>New</p>
              <p>Clothing</p>
              <p>Shoes</p>
              <p>Accessories</p>
              <p>Brands</p>
              <p>Sports</p>
              <p>Premium</p>
              <p style={{ color: '#F54F1F' }}>Sale</p>
            </div>
            <img src={search} alt='search' />
          </NavbarBottomWrap>
        </MidAndBotJointWrap>
      </NavbarBottomPartAllWrap>

      {/* Loading overlay */}
      {loading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(255,255,255,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999
          }}
        >
          <ClipLoader color='#F54F1F' size={60} />
        </div>
      )}
    </FullWrap>
  )
}

export default NavbarComponent
