import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { RecoilRoot } from 'recoil'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00FFFF',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"IBM Plex Mono", monospace',
  },
})

ReactDOM.render(
  <RecoilRoot>
    <CssBaseline />
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById('root')
)
