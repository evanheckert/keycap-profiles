import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { AnimatePresence, motion } from 'framer-motion'
import ReactGA from 'react-ga'
import PROFILES from '../../utils/profiles'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { selectedStackState } from '../../utils/atoms'

import KeycapRow from '../../components/KeycapRow'

const StackScreen = ({ width, rowScale }) => {
  const classes = useStyles()

  useEffect(() => {
    ReactGA.pageview('/stack')
  }, [])

  const selectedProfiles = useRecoilValue(selectedStackState)

  return (
    <>
      <Typography variant='h3' gutterBottom className={classes.headerText}>
        Keycap Profiles
      </Typography>

      <Paper className={classes.contentInner} style={{ minHeight: (((width - 32) * 3) / 14) * (selectedProfiles.length + 1) }}>
        <AnimatePresence>
          {selectedProfiles.map((key, index) => {
            return (
              <KeycapRow key={key} color={COLORS[index]} stackMode={true} index={index} profileData={PROFILES[key]} rowScale={rowScale} />
            )
          })}
        </AnimatePresence>
        <motion.div style={{ originX: 0, originY: 0, scale: rowScale }}>
          <AnimatePresence>
            {selectedProfiles.map((key, ind) => (
              <motion.div layout key={ind} style={{ color: COLORS[ind] }}>
                <Typography variant='h5' noWrap className={classes.labelContainer}>
                  {key}
                </Typography>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Paper>
    </>
  )
}

const COLORS = ['#00FF00', '#FF9900', '#00FFFF', '#FF005B', '#AA66FF']

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
  labelContainer: {
    // position: 'absolute',
    left: 0,
    opacity: 0.8,
    fontSize: 48,
    width: 300,
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
}))

export default StackScreen
