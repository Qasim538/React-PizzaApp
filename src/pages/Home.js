import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from '../images/pizza.jpeg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${HomeImage})`}}>
      <div className='headerContainer' >
        <h1>Italian Pizzeria</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, iste?</p>
        <Link to="/menu">
        <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
