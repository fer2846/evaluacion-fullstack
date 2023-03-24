import * as React from 'react';
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import pokemonLogo from "../assets/images/pokemonLogo.jpg"
import { users, validateSession } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface IUser {
  email: string;
  password: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<IUser>({
    email: '',
    password: ''
  })

  const [showSnackbar, setShowSnackbar] = useState(false)

  useEffect(()=>{
    const userAlreadiExists = validateSession()

    if(userAlreadiExists)
      navigate('pokemons')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const handleChange = (event: any) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const login = () => {
    const tmpUsers = Array.from(users)
    let userExists
    for (const tmpUser of tmpUsers) {
      if(tmpUser.email === user.email && tmpUser.password === user.password)
        userExists = true
    }
    if(userExists){
      navigate('/pokemons')
      sessionStorage.setItem('user', JSON.stringify(user))
      return
    }
    setShowSnackbar(true)
  }

  const handleClose = () => {
    setShowSnackbar(false)
  }

  return (
    <Container>
      <Grid sx={{
        position: 'absolute',
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }} container justifyContent='center'>
        <Grid item xs={9} sm ={6} md={4}>
          <Grid container justifyContent='center' direction='column' >
            <div 
              style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "180px"
            }}
          >
              <img 
              src={pokemonLogo}
              alt='logo'
              style={{
                  width: "95%",
                  height: "auto",
              }}
              />
          </div>
            <Grid item xs={12} mt={2}>
              <TextField
                style={{
                  display: 'flex'
                }}
                required
                name='email'
                label="Email"
                value={user.email}
                variant='standard'
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField
                style={{
                  display: 'flex'
                }}
                required
                type='password'
                name='password'
                label="Password"
                value={user.password}
                variant='standard'
                onChange={handleChange}
              />
            </Grid>
            <Button
              style={{
                marginTop: "30px"
              }}
              variant='contained'
              disabled={!user.email || !user.password}
              onClick={login}
            >
                Login
              </Button>
          </Grid>
        </Grid>
      </Grid>
      
      <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Email or password are incorrect!
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Login