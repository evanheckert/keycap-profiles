import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import useDimensions from 'react-use-dimensions'
import ReactGA from 'react-ga'
import { useMotionValue } from 'framer-motion'

import { makeStyles } from '@material-ui/core/styles'

import Navigation from './components/Sidebar'

import ListScreen from './Screens/List/ListScreen'
import StackScreen from './Screens/Stack/StackScreen'

ReactGA.initialize('UA-5686457-15', { siteSpeedSampleRate: 100 })

const App = () => {
  const classes = useStyles()
  const [ref, { width }] = useDimensions()
  const rowScale = useMotionValue(((width || 800) - 32) / 1400)

  useEffect(() => {
    const newWidth = width || 800
    let newRowScale
    if (newWidth > 1400) newRowScale = 1
    else {
      const newRowWidth = (width || 800) - 32
      newRowScale = newRowWidth / 1400
    }

    rowScale.set(newRowScale)
  }, [width, rowScale])

  return (
    <div className={classes.root}>
      <main ref={ref} className={classes.content}>
        <Navigation />

        <Routes>
          <Route path='/' element={<ListScreen width={width} rowScale={rowScale} />} />
          <Route path='/stack' element={<StackScreen width={width} rowScale={rowScale} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'black',
  },
  content: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    [theme.breakpoints.down('xs')]: {
      left: 0,
    },
    [theme.breakpoints.up('sm')]: {
      left: 200,
    },
  },
}))
