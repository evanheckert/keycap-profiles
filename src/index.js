import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './App'

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

ReactDOM.render(
  <RecoilRoot>
    <CssBaseline />
    <ThemeProvider theme={darkTheme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById('root')
)
