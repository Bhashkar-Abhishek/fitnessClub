import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import Button from '@mui/material/Button';
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)

  const isLogedIn=localStorage.getItem("isLogedIn")

  const handleLoginLogout=()=>{
    localStorage.removeItem("isLogedIn")
  }

  return (
    <>
      <div className={style.navDiv}>

        <div className={style.logo}>
        <Link to='/' style={{ textDecoration: 'none' }} > <h1>GYM</h1> </Link>
      </div>

      <div className={style.linkDiv} >

          <Link to='/aboutUs' style={{ textDecoration: 'none' }}  >About Us</Link>
          <Link to='/program' style={{ textDecoration: 'none' }}  >Program</Link>
          <Link to='/training' style={{ textDecoration: 'none' }} >Training</Link>
          <Link to='/pricing' style={{ textDecoration: 'none' }} >Pricing</Link>
          <Link to='/registration' style={{ textDecoration: 'none' }} >Registration</Link>
        
      </div>

      <div className={style.btn_div}>
      <Link to='/login'> <Button variant="contained" onClick={handleLoginLogout}> {isLogedIn?"LogOut":"LogIn"} </Button></Link>

      </div>
 
      <div className={style.menuIcon} >
        {isMobile ? <HiMenuAlt3 onClick={() => setIsMobile(false)} /> : <HiMenu onClick={() => setIsMobile(true)} />}
      </div>
    </div >
    {isMobile?(
              <div className={style.mobileLinkDiv}>
              <div className={style.mobileLink}>
                <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                <Link to='/aboutUs' style={{ textDecoration: 'none' }}>AboutUs</Link>
                <Link to='/programs' style={{ textDecoration: 'none' }}>Program</Link>
                <Link to='/training' style={{ textDecoration: 'none' }}>Training</Link>
                <Link to='/pricing' style={{ textDecoration: 'none' }}>Pricing</Link>
                <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
              </div>
            </div>
      
      ):null}

    </>
  )
}