import { AppBar, Typography, Toolbar, Container, Button } from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { keyframes } from '@emotion/react'
import useStateContext from '../hooks/useStateContext'

// Define the keyframes for the lighting animation
const lightingAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 1);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`

export default function Layout() 
{
    // logout will reset the quiz state
    // and send you back to the login / signup form 
    const {resetContext} = useStateContext();
    const navigate = useNavigate();

    const logout = () => {
        resetContext();
        navigate('/');
    }

  return (
    <>
      <AppBar 
        position='sticky'
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
          backdropFilter: 'blur(10px)', // Blur effect
          boxShadow: 'none', // Remove default shadow
          animation: `${lightingAnimation} 3s infinite` // Apply the lighting animation
        }}
      >
        <Toolbar sx={{ width: 640, m: 'auto' }}>
          <Typography
            variant='h4'
            align='center'
            sx={{flexGrow: 1}}
          >
            IT Knowledge Quiz
          </Typography>
          <Button 
            onClick={logout}
            variant='outlined'
            size='medium'
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.7)',
              },
              padding: '5px 15px',
              borderRadius: '5px',
              textTransform: 'none',
              fontWeight: 'normal',
            }}
          >
            Quit
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </>
  )
}