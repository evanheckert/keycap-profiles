import Typography from '@material-ui/core/Typography'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useRecoilValue } from 'recoil'
import { profilesDataState } from './atoms'
import useDimensions from 'react-use-dimensions'
import KeycapRow from './KeycapRow'
import { useEffect } from 'react'
import Navigation from './Sidebar'
import { AnimatePresence, useMotionValue } from 'framer-motion'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-5686457-15', {
  debug: true,
  siteSpeedSampleRate: 100,
})

function App() {
  const classes = useStyles()
  const [ref, { width }] = useDimensions()
  const rowScale = useMotionValue(((width || 800) - 32) / 1400)

  const profilesData = useRecoilValue(profilesDataState)
  const keyList = [...Object.keys(profilesData)]

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

  const profiles = [].concat(keyList.filter(key => profilesData[key].isSelected))

  useEffect(() => {
    ReactGA.pageview('/main')
  }, [ReactGA])

  return (
    <div className={classes.root}>
      <Navigation />
      <main ref={ref} className={classes.content}>
        <Typography variant='h3' gutterBottom className={classes.headerText}>
          Keycap Profiles
        </Typography>
        <Paper className={classes.contentInner} style={{ minHeight: (((width - 32) * 3) / 14) * (profiles.length + 1) }}>
          <AnimatePresence>
            {profiles.map((key, index) => {
              return <KeycapRow key={key} index={index} profileData={profilesData[key]} rowScale={rowScale} />
            })}
          </AnimatePresence>
        </Paper>
      </main>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  headerText: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 64,
      fontSize: 32,
    },
    zIndex: 80,
    paddingLeft: 16,
    paddingTop: 16,
    color: '#ffffffde',
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
  contentInner: {
    backgroundColor: 'black',
    flex: '1 1 auto',
    padding: theme.spacing(3),
    alignItems: 'center',
    minHeight: 1,
    minWidth: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  root: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'black',
  },
}))

export default App
