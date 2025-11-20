import React from 'react'
import Footer from '../FlexibleBars/footer'
import NavbarComponent from '../FlexibleBars/navbar'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const FavouritesComponent = () => {
    const navigate = useNavigate();

    const handleShop = () => {
        navigate('/shops');
    }
  return (
    <div>
        <NavbarComponent />
        <section style={{display: "flex",  padding: '20px', alignItems: 'center', flexDirection: 'column', minHeight: '80vh'}}>
        <h1>Favourites Page</h1>
        <div>
            {/* Favourites content goes here */}
            <p>You don't have any items in your favorites</p>
            <Button onClick={handleShop}>Go to Shops</Button>
        </div>
        </section>
        <Footer />
    </div>
  )
}

export default FavouritesComponent