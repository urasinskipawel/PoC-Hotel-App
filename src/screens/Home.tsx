// Home.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, Button } from '@mui/material'

const Home = () => {
  return (
    <Container>
      <Typography variant='h4' sx={{ marginBottom: '1rem' }}>
        Witaj w aplikacji do zarządzania sprzątaniem pokoi hotelowych!
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        Tutaj znajdziesz informacje o hotelach oraz możliwość zarządzania
        pokojami.
      </Typography>
      <Button component={Link} to='/login' variant='contained' color='primary'>
        Zaloguj się
      </Button>
    </Container>
  )
}

export default Home
