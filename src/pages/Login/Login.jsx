import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import style from "./Login.module.css"
import Button from '@mui/material/Button';
import { Link,useNavigate } from "react-router-dom"


function Login() {

  const [email,setEmail]=useState("")
  
  const [password,setPassword]=useState("")
  const [userList,setUserList]=useState([])
  const [error,setError]=useState(false)
  const [errorText,setErrorText]=useState("")
  const [showPassword,setShowPassword]=useState(false)

  const navigate=useNavigate()

  const handlePasswordVisibility=()=>[
    setShowPassword(!showPassword)
  ]

  useEffect(()=>{
const data=JSON.parse(localStorage.getItem("userData"))
if(data)
setUserList(data)
  },[])

  const existingUser=userList.find(user=>user.email===email&& user.password===password)


  const pattern=/^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,6}$/  
  function isEmail(str){
    return str.match(pattern)
  }

const handleLogin=()=>{
  if(email===""||password==""){
    setError(true)
    setErrorText("Input fields can not be empty")
  }
  else if(isEmail(email)==null||isEmail(email)==undefined){
    setError(true)
    setErrorText("Invalid Email")
  }
  else if(userList===null||userList===undefined){
    setError(true)
    setErrorText("User not found register first")
  }
  else if(!existingUser){
    setError(true)
    setErrorText("User not found register first")
  }
  else{
    setError(false)
    setErrorText("")
    setEmail("")
    setPassword("")
    alert(`Hello ${existingUser.name} login successful`)
    navigate("/")
    localStorage.setItem("isLogedIn",true)

  }

}  

  return (
    <div className={style.container}>
      <div className={style.form}>
      <div className={style.header}>
          <h1>Sign In</h1>
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
          
          <p className={style.error}>
            {error?<small>{errorText}</small>:null}
            </p>

          {/* <Button
            variant="contained"
            onClick={handleLogin}
            sx={{
              marginTop: "1.5rem"
            }}
          >
            Login
          </Button> */}
          <Button
          variant="contained"
          onClick={handleLogin}
          sx={{
            marginTop:"1.5rem"
          }}
          >
            Login
          </Button>

         
           <div className={style.login}>
            <p>Don't have an account? 
               <Link to="/registration" style={{ textDecoration: 'none' }} > SignUp </Link></p>
          </div>

        </Box>

      </div>
      
    </div>
  )
}

export default Login
