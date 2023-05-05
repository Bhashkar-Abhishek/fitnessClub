import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import style from "./Registration.module.css"
import Button from '@mui/material/Button';
import { Link,useNavigate } from "react-router-dom"


function Registration() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState("")

  const navigate=useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const oldData = JSON.parse(localStorage.getItem("userData")) || []
  const existingUser = oldData.find(user => user.name === name && user.email == email)

  const pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/
  function isEmail(str){
    return str.match(pattern)
  }

  const handleSignUp=(e)=> {
    e.preventDefault()
    if(name===""||email===""||password===""||confirmPassword===""){
      setError(true)
      setErrorText("Input fields can not be empty")
    }
    else if(name.length<3){
      setError(true)
      setErrorText("Name must be at least 3 characters")
    }
    else if(isEmail(email)===null||isEmail(email)===undefined){
      setError(true)
      setErrorText("Invalid email")
    }
    else if(password.length<6){
      setError(true)
      setErrorText("Password must be at least 6 characters")
    }
    else if(password!==confirmPassword){
      setError(true)
      setErrorText("Password do not match")
    }
    else {
      alert(`Welcome ${name} signup successful`)
      setError(false)
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      navigate("/login")

      const newUser={
        name:name,
        email:email,
        password:password
      }
      const updatedUser=[...oldData,newUser]
      localStorage.setItem("userData",JSON.stringify(updatedUser))
    }

  }
  return (
    <div className={style.container}>

      <div className={style.form}>

        <div className={style.header}>
          <h1>Sign Up</h1>
        </div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          <TextField
            id="full-name"
            label="Full Name"
            variant="outlined"
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            sx={{
              height: "100%",
              width: "100%",
            }}
          />

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            sx={{
              height: "2rem",
              width: "100%",
              margin: "1.5rem"
            }}
          />

          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              height: "2rem",
              width: "100%",
              margin: "1.5rem"
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="email"
            label="Confirm Password"
            variant="outlined"
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="off"
            sx={{
              height: "2rem",
              width: "100%",
              margin: "1.5rem"
            }}
          />
          <p className={style.error}>
            {error?<small>{errorText}</small>:null}
            </p>

          <Button
            variant="contained"
            onClick={handleSignUp}
            sx={{
              marginTop: "1.5rem"
            }}
          >
            SignUp
          </Button>
          
          <div className={style.login}>
            <p>Already have an account? 
               <Link to="/login" style={{ textDecoration: 'none' }} > SignIn </Link></p>
          </div>


        </Box>
      </div>
    </div>
  )
}

export default Registration
