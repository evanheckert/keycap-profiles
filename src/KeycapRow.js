import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useRecoilValue } from 'recoil'
import { spacingState } from './atoms'
import { tls } from './utils'
import { motion, useTransform } from 'framer-motion'
import Keycap from './Keycap'

const KeycapRow = ({ profileData, rowScale, index }) => {
  const classes = useStyles()
  const spacingName = useRecoilValue(spacingState)
  const spacing = spacingName === 'CHERRYMX' ? 1.905 : 1.8
  const rowHeight = useTransform(rowScale, latest => 300 * latest)
  const y = useTransform(rowHeight, latest => index * latest + 20)

  return (
    <motion.div layout className={classes.scaleWrapper} style={{ originX: 0, originY: 0, scale: rowScale, y }} exit={{ opacity: 0 }}>
      <div className={classes.container}>
        <div className={classes.horizontalLine} style={{ top: 0 }} />
        <div className={classes.horizontalLine} style={{ top: 25, opacity: 0.5 }} />
        <div className={classes.horizontalLine} style={{ top: 125, opacity: 0.5 }} />
        <div className={classes.horizontalLine} style={{ top: 225 }} />

        <Typography variant='h5' noWrap className={classes.labelContainer}>
          {profileData.label}
        </Typography>

        {['R0', 'R1', 'R2', 'R3', 'R4', 'R5'].map((row, ind) => (
          <Keycap index={ind} key={row} spacing={spacing} SvgComponent={profileData[row]} profileLabel={profileData.label} />
        ))}

        {[0, 1, 2, 3].map(val => {
          return (
            <div
              className={classes.centerLine}
              style={{ width: 100 * spacing, right: (val + 0.6) * (100 * spacing), borderLeftWidth: val === 3 ? 1 : 0 }}
            >
              <Typography className={classes.spacingText}>{tls(10 * spacing, 2)} mm</Typography>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default KeycapRow

const useStyles = makeStyles(theme => ({
  spacingText: {
    color: '#00FFFF',
    opacity: 0.5,
    fontSize: 24,
  },
  svgWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
    width: 190.5,
    height: 200,
  },
  scaleWrapper: {
    width: 1400,
    height: 300,
    top: 0,
    left: 16,
    position: 'absolute',
  },
  centerLine: {
    bottom: 15,
    height: 75,
    paddingBottom: 10,
    position: 'absolute',
    border: '0px solid #00FFFF99',
    borderRightWidth: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  keycapContainer: {
    boxSizing: 'border-box',
    position: 'absolute',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 10,

    bottom: 75,
    height: 200,
    marginTop: 25,
    paddingLeft: -5,
    paddingRight: -5,
  },
  labelContainer: {
    position: 'absolute',
    left: 0,
    opacity: 0.8,
    fontSize: 48,
    width: 300,
  },
  horizontalLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    borderTop: '3px solid grey',
  },
  content: {
    backgroundColor: 'black',
    flex: 1,
    padding: theme.spacing(3),
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 1400,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    position: 'relative',
  },
}))
