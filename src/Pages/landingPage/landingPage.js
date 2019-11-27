import React, { useState } from 'react'
import Login from '../../Components/Login/Login'

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return(
    <>
      {!isLoggedIn ? <Login /> : null }
    </>
  )
}

export default LandingPage;