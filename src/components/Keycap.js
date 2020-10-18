import { motion } from 'framer-motion'

import { makeStyles } from '@material-ui/core/styles'

const Keycap = ({ index, profileLabel, SvgComponent, spacing, color }) => {
  const classes = useStyles()

  const right = ((index === 0 ? 5.15 : 5 - index) + 0.1) * (100 * spacing)

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'tween', ease: [0.0, 0.0, 0.2, 1] }}
      className={classes.keycapContainer}
      style={{ width: spacing * 100, right }}
    >
      <div className={classes.svgWrapper}>
        {SvgComponent && <SvgComponent alt={profileLabel} height={200} width={190.5} stroke={color} />}
      </div>
    </motion.div>
  )
}

export default Keycap

const useStyles = makeStyles(() => ({
  svgWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
    width: 190.5,
    height: 200,
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
}))
