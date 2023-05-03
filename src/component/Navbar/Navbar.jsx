import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import Button from '@mui/material/Button';


export default function Navbar() {

  return (
    <>
      <div className={style.navDiv}>

        <div className={style.logo}>
        <Link to='/'> <h1>GYM</h1> </Link>
      </div>

      <div className={style.linkDiv} >

          <Link to='/aboutUs' >About Us</Link>
          <Link to='/program' >Program</Link>
          <Link to='/training'>Training</Link>
          <Link to='/pricing'>Pricing</Link>
          <Link to='/registration'>Registration</Link>
        
      </div>

      <div className={style.button}>
      <Link to='/login'> <Button variant="contained">Login</Button></Link>

      </div>
 
    </div >

    </>
  )
}