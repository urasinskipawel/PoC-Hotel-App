import React, { useState } from 'react'
import { Container, Typography, TextField, Button } from '@mui/material'

import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    // Przykładowa logika autoryzacji
    if (username === 'admin' && password === 'password') {
      // Przekierowanie na ekran HotelList
      navigate('/hotels')
    } else {
      // Obsługa błędnych danych logowania
    }
  }

  return (
    <Container>
      <Typography variant='h4' sx={{ marginBottom: '1rem' }}>
        Zaloguj się
      </Typography>
      <TextField
        label='Nazwa użytkownika'
        variant='outlined'
        fullWidth
        margin='normal'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label='Hasło'
        type='password'
        variant='outlined'
        fullWidth
        margin='normal'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} variant='contained' color='primary'>
        Zaloguj
      </Button>
    </Container>
  )
}

export default Login
