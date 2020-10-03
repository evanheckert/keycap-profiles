import Typography from '@material-ui/core/Typography'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useRecoilValue } from 'recoil'
import { profilesDataState } from './atoms'
import useDimensions from 'react-use-dimensions'
import KeycapRow from './KeycapRow'
import { useEffect, useState } from 'react'
import Navigation from './Sidebar'

function App() {
  const classes = useStyles()
  const [scale, setScale] = useState(1)
  const [ref, { width }] = useDimensions()
  const profilesData = useRecoilValue(profilesDataState)
  const keyList = [...Object.keys(profilesData)]

  useEffect(() => {
    const newScale = (width - 40) / 1120
    setScale(newScale)
  }, [width])

  const unitSizeTwo = 80 * scale

  return (
    <div className={classes.root}>
      <Navigation />
      <main ref={ref} className={classes.content}>
        <Paper className={classes.contentInner}>
          <Typography variant='h3' gutterBottom className={classes.headerText}>
            Keycap Profiles
          </Typography>

          {keyList.map(key => {
            if (!profilesData[key].isSelected) return null
            return <KeycapRow unitSize={unitSizeTwo} rowData={profilesData[key]} scale={scale} key={key} />
          })}
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
    overflow: 'hidden',
  },
  root: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
}))

export default App
