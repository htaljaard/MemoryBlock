import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNavAppBar from './components/AppBar/TopNavAppBar'
import { CssBaseline } from '@mui/material'
import GameCanvas from './components/GameCanvas/GameCanvas'
import { Container, Stack } from '@mui/system'

function App() {

  return (
    <Stack gap={2}>
      <CssBaseline />
      <TopNavAppBar />
      <Container>
        <GameCanvas />
      </Container>

    </Stack>
  )
}

export default App
