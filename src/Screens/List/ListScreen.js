import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { AnimatePresence } from 'framer-motion'
import ReactGA from 'react-ga'

import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { profilesDataState, selectedProfilesState } from '../../utils/atoms'

import KeycapRow from '../../components/KeycapRow'

const ListScreen = ({ width, rowScale }) => {
  const classes = useStyles()
  const [isRendered, setIsRendered] = useState(false)
  useEffect(() => {
    ReactGA.pageview('/list')
  }, [])

  useEffect(() => {
    if (!isRendered) setIsRendered(true)
  }, [setIsRendered, isRendered])

  const profilesData = useRecoilValue(profilesDataState)
  const selectedProfiles = useRecoilValue(selectedProfilesState)
  const profiles = [].concat(selectedProfiles.filter(key => profilesData[key].isSelected))

  return (
    <>
      <Typography variant='h3' gutterBottom className={classes.headerText}>
        Keycap Profiles
      </Typography>

      {isRendered && (
        <Paper className={classes.contentInner} style={{ minHeight: (((width - 32) * 3) / 14) * (profiles.length + 1) }}>
          <AnimatePresence>
            {profiles.map((key, index) => {
              return <KeycapRow key={key} index={index} profileData={profilesData[key]} rowScale={rowScale} />
            })}
          </AnimatePresence>
        </Paper>
      )}
    </>
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

export default ListScreen
