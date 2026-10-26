import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import CssBaseline from '@material-ui/core/CssBaseline'

import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#00FFFF' },
    secondary: { main: '#f50057' },
  },
  typography: {
    fontFamily: '"IBM Plex Mono", monospace',
  },
})

const container = document.getElementById('root')
let root
if (container) root = createRoot(container) // ts-expect-error - createRoot is not yet in the types

if (root)
  root.render(
    <React.StrictMode>
      <RecoilRoot>
        <CssBaseline />
        <ThemeProvider theme={darkTheme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </RecoilRoot>
    </React.StrictMode>
  )
