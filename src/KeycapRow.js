import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useRecoilValue } from 'recoil'
import { spacingState } from './atoms'
import { tls } from './utils'

const KeycapRow = ({ rowData, unitSize = 60, scale = 1 }) => {
  const classes = useStyles()
  const spacingName = useRecoilValue(spacingState)
  const spacing = spacingName === 'CHERRYMX' ? 1.905 : 1.8
  const keycapContainerStyles = {
    bottom: unitSize * 0.75,
    height: 2 * unitSize,
    width: spacing * unitSize,
    marginTop: 0.25 * unitSize,
  }
  const RowZeroSvg = rowData.R0

  return (
    <div style={{ transform: [{ scale }] }}>
      <div className={classes.container} style={{ height: unitSize * 3, width: unitSize * 14, paddingRight: unitSize * 0.1 }}>
        <div className={classes.horizontalLine} style={{ height: 1, top: unitSize * 0.25, opacity: 0.3 }} />
        <div className={classes.horizontalLine} style={{ height: 1, top: unitSize * 1.25, opacity: 0.3 }} />
        <div className={classes.horizontalLine} style={{ height: 1, top: unitSize * 2.25 }} />

        <div className={classes.keycapContainer} style={{ ...keycapContainerStyles, right: 5.15 * (unitSize * spacing) }}>
          <div className={classes.svgWrapper} style={{ width: unitSize * 1.905, height: 2 * unitSize }}>
            {RowZeroSvg && <RowZeroSvg alt={rowData.label} height={2 * unitSize} width={unitSize * 1.905} />}
          </div>
        </div>

        <Typography
          variant='h5'
          noWrap
          className={classes.labelContainer}
          style={{ bottom: unitSize * 0.75 + 8, fontSize: unitSize > 50 ? 24 : 14, width: 1.8 * unitSize }}
        >
          {rowData.label}
        </Typography>

        {['R1', 'R2', 'R3', 'R4', 'R5'].map((row, index) => {
          const CapSvg = rowData[row]
          return (
            <div
              key={row}
              className={classes.keycapContainer}
              style={{ ...keycapContainerStyles, right: (4 - index) * (unitSize * spacing), paddingLeft: -5, paddingRight: -5 }}
            >
              <div className={classes.svgWrapper} style={{ width: unitSize * 1.905, height: 2 * unitSize }}>
                {CapSvg && <CapSvg alt={rowData.label} height={2 * unitSize} width={unitSize * 1.905} />}
              </div>
            </div>
          )
        })}

        {[0, 1, 2, 3].map(val => {
          return (
            <div
              className={classes.centerLine}
              style={{
                width: unitSize * spacing,
                right: (val + 0.5) * (unitSize * spacing),
                bottom: unitSize * 0.15,
                height: unitSize * 0.75,
                paddingBottom: unitSize * 0.1,
                borderLeftWidth: val === 3 ? 1 : 0,
              }}
            >
              <Typography style={{ color: '#00FFFF', opacity: 0.8, fontSize: unitSize > 70 ? 16 : unitSize > 40 ? 12 : 8 }}>
                {tls(10 * spacing, 2)} mm
              </Typography>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default KeycapRow

const useStyles = makeStyles(theme => ({
  svgWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
  },

  centerLine: {
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
    paddingLeft: -10,
    paddingRight: -10,
  },
  labelContainer: {
    position: 'absolute',
    left: 0,
    opacity: 0.8,
  },
  horizontalLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderTop: '1px solid grey',
  },
  content: {
    backgroundColor: 'black',
    flex: 1,
    padding: theme.spacing(3),
    alignItems: 'center',
  },
  container: {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    position: 'relative',
  },
}))
