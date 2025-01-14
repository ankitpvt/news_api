import React from 'react'
import { Link, Route } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <div>
      <h1>choose which news you want</h1>
      <div>
        
        <Link to='/top'>Top Headline of india</Link>
        <Link to='/marathi'>Top Headline of India in Marathi</Link>
        <Link to='/education'>Education News</Link>
        <Link to='/sport'>Sport News</Link>
      </div>
    </div>
  )
}

export default Home
