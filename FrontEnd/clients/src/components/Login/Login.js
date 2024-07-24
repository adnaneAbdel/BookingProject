import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const hnadleChangeEmail = (e) => {
    setEmail(e.target.value);
  
  }
  const hnadleChangePass = (e) => {
    setPassword(e.target.value);
    
  }
  const hnadleSubmit = async (e) => {
    e.preventDefault();
   try {
    const response = await  axios.post('http://localhost:3000/auth/login',{
      email,
      password
    });
    localStorage.setItem('token', response.data.token); // Save the token in localStorage
    console.log(response.data.token); // Log the token to confirm
    navigate('/Dashobrad')
   } catch (error) {
    console.error('Error:', error);
   }
  }
  

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    return (
        <>
              <Container>
                <div className='containerDiv'>
                <h1>Login</h1>
                <form onSubmit={hnadleSubmit}> 
      <div className='labelDiv'><label>Email</label></div>
     <div>
     <TextField id="outlined-basic"
      className='ipnuteText'
      label="Your Email"
       variant="outlined" 
       value={email}
       onChange={hnadleChangeEmail} />
     </div>
      <div className='labelDiv'><label>Password</label></div>
      <FormControl  variant="outlined"  className='ipnuteText'>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
             value={password}
            onChange={hnadleChangePass}
           
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
     <div className='btnLogin'>
     <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
     
      <p>Create an account click <Link to={'/Register'} className='link'>Here</Link> </p>
     </div>
     </form>
                </div>
                
      </Container>
      
    </>
    )
}

export default Login ;