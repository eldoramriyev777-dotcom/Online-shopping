import React, { useState, useRef, useEffect } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
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
  const [selectedCity, setSelectedCity] = useState('Amsterdam')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const [selectedCurrency, setSelectedCurrency] = useState('USD')

  const locationRef = useRef(null)
  const languageRef = useRef(null)
  const currencyRef = useRef(null)

  const [locationPosition, setLocationPosition] = useState('bottom left')
  const [languagePosition, setLanguagePosition] = useState('bottom left')
  const [currencyPosition, setCurrencyPosition] = useState('bottom left')

  const cities = [
    { city: 'Amsterdam', country: 'Netherlands' },
    { city: 'Berlin', country: 'Germany' },
    { city: 'Seoul', country: 'South Korea' },
    { city: 'Tashkent', country: 'Uzbekistan' },
    { city: 'Tokyo', country: 'Japan' },
  ]

  const languages = [
    { label: 'English', country: 'United States' },
    { label: 'Russian', country: 'Russia' },
    { label: 'Uzbek', country: 'Uzbekistan' }
  ]

  const currencies = [
    { code: 'USD', symbol: '$', name: 'United States dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' }
  ]

  const handleCurrencySelect = (code) => setSelectedCurrency(code)

  const handleClick = (e) => {
    e.preventDefault()
    setFadeOut(true)
    setTimeout(() => setLoading(true), 500)
    setTimeout(() => navigate('/login/sign-in'), 1500)
  }

  const handleCityChange = (cityName) => setSelectedCity(cityName)
  const handleLanguageChange = (lang) => setSelectedLanguage(lang)

  // Responsive dropdown position
  const handleResize = () => {
    if (locationRef.current) {
      const rect = locationRef.current.getBoundingClientRect()
      setLocationPosition(rect.right + 250 > window.innerWidth ? 'bottom right' : 'bottom left')
    }
    if (languageRef.current) {
      const rect = languageRef.current.getBoundingClientRect()
      setLanguagePosition(rect.right + 250 > window.innerWidth ? 'bottom right' : 'bottom left')
    }
    if (currencyRef.current) {
      const rect = currencyRef.current.getBoundingClientRect()
      setCurrencyPosition(rect.right + 250 > window.innerWidth ? 'bottom right' : 'bottom left')
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <FullWrap style={{ position: 'relative', overflow: 'hidden' }}>
      <NavbarAllWrap>
        <NavbarTopWrap>
          {/* LOCATION DROPDOWN */}
          <Popup
            trigger={
              <div ref={locationRef} className='location' style={{ cursor: 'pointer' }}>
                <img src={cursor} alt='cursor' />
                <p>Shipping location — {selectedCity}</p>
                <img src={vector_down} alt='vector_down' />
              </div>
            }
            position={locationPosition}
            closeOnDocumentClick
            arrow={false}
          >
            <div style={{
              width: '250px',
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              padding: '15px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#f5f5f5',
                borderRadius: '8px',
                padding: '8px 10px'
              }}>
                <img src={search} alt="search" width="18" height="18" />
                <input
                  type="text"
                  placeholder="Enter the address"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ border: 'none', outline: 'none', background: 'transparent', width: '100%', fontSize: '14px' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '200px', overflowY: 'auto' }}>
                {cities
                  .filter((c) => c.city.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((c, i) => (
                    <label key={i} style={{
                      display: 'flex',
                      flexDirection: 'column',
                      background: '#fafafa',
                      borderRadius: '8px',
                      padding: '8px 10px',
                      cursor: 'pointer',
                      border: selectedCity === c.city ? '1px solid #F54F1F' : '1px solid transparent'
                    }}
                      onClick={() => handleCityChange(c.city)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input type='checkbox' checked={selectedCity === c.city} readOnly />
                        <strong>{c.city}</strong>
                      </div>
                      <small style={{ color: '#888', marginLeft: '26px' }}>{c.country}</small>
                    </label>
                  ))}
              </div>
            </div>
          </Popup>

          {/* OPTIONS */}
          <div className='options'>
            <p><img src={time} alt='time' /><small>How we are doing now?</small></p>

            {/* LANGUAGE DROPDOWN */}
            <Popup
              trigger={
                <p ref={languageRef} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={world} alt='world' />
                  <small>{selectedLanguage}</small>
                </p>
              }
              position={languagePosition}
              closeOnDocumentClick
              arrow={false}
            >
              <div style={{
                width: '250px',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxHeight: 'auto'
              }}>
                {languages.map((lang, index) => (
                  <label key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    border: "1px solid #c5c4c4",
                    padding: '5px 8px',
                    borderRadius: '5px',
                    background: selectedLanguage === lang.label ? '#f5f5f5' : 'transparent'
                  }}
                    onClick={() => handleLanguageChange(lang.label)}
                  >
                    <input type="checkbox" checked={selectedLanguage === lang.label} readOnly />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <strong>{lang.label}</strong>
                      <small style={{ color: '#888' }}>{lang.country}</small>
                    </div>
                  </label>
                ))}
              </div>
            </Popup>

            {/* CURRENCY DROPDOWN */}
            <Popup
              trigger={
                <p ref={currencyRef} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={currency} alt='currency' />
                  <small>{selectedCurrency}</small>
                </p>
              }
              position={currencyPosition}
              closeOnDocumentClick
              arrow={false}
            >
              <div style={{
                width: '250px',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxHeight: 'auto'
              }}>
                {currencies.map((cur, idx) => (
                  <label key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    padding: '5px 8px',
                    borderRadius: '5px',
                    background: selectedCurrency === cur.code ? '#f5f5f5' : 'transparent'
                  }}
                    onClick={() => handleCurrencySelect(cur.code)}
                  >
                    <input type="checkbox" checked={selectedCurrency === cur.code} readOnly />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <strong>{cur.code} - {cur.symbol}</strong>
                      <small style={{ color: '#888' }}>{cur.name}</small>
                    </div>
                  </label>
                ))}
              </div>
            </Popup>
          </div>
        </NavbarTopWrap>
      </NavbarAllWrap>

      {/* Bottom sections (unchanged) */}
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
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255,255,255,0.9)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 999
        }}>
          <ClipLoader color='#F54F1F' size={60} />
        </div>
      )}
    </FullWrap>
  )
}

export default NavbarComponent
