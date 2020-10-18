import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Typography from '@material-ui/core/Typography'

import MenuIcon from '@material-ui/icons/Menu'

import { profilesDataState, spacingState } from '../utils/atoms'

const Navigation = () => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)
  // const [mode, setMode] = useRecoilState(modeState)
  const [spacing, setSpacing] = useRecoilState(spacingState)
  const [profilesData, setProfilesData] = useRecoilState(profilesDataState)
  const keyList = [...Object.keys(profilesData)]

  const drawer = (
    <div>
      <NavLink
        end
        to='/'
        className={classes.linkRow}
        style={{ color: '#ffffff99', marginTop: 24 }}
        activeStyle={{ backgroundColor: '#ffffff11', color: '#fff' }}
      >
        <Typography>List Mode</Typography>
      </NavLink>

      <NavLink
        end
        to='/stack'
        className={classes.linkRow}
        style={{ color: '#ffffff99' }}
        activeStyle={{ backgroundColor: '#ffffff11', color: '#fff' }}
      >
        <Typography>Stack Mode</Typography>
      </NavLink>

      <FormControl component='fieldset' className={classes.radioContainer}>
        <Typography className={classes.sectionTitle}>Spacing</Typography>
        <RadioGroup value={spacing} onChange={handleSpacingChange}>
          <FormControlLabel value='CHERRYMX' control={<Radio />} label='Cherry MX' />
          <FormControlLabel value='CHOC' control={<Radio />} label='Choc' />
        </RadioGroup>
      </FormControl>

      <Divider />
      <FormGroup aria-label='position' className={classes.checkList}>
        <Typography className={classes.sectionTitle}>Profiles</Typography>

        {keyList.map(key => {
          const profile = profilesData[key]
          if (profile.R0 === null) return null
          return (
            <div className={classes.checkboxRow} key={key}>
              <Checkbox checked={profile.isSelected} onChange={e => handleCheck(e.target.checked, key)} />
              <Typography>{profile.label}</Typography>
            </div>
          )
        })}
      </FormGroup>
    </div>
  )

  return (
    <>
      <IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle} className={classes.menuButton}>
        <MenuIcon />
      </IconButton>

      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer classes={{ paper: classes.drawerPaper }} variant='permanent' open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  )
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
  // function handleChange(event) {
  //   setMode(event.target.value)
  // }
  function handleSpacingChange(event) {
    console.log({ newSpacing: event.target.value })
    setSpacing(event.target.value)
  }

  function handleCheck(e, key) {
    console.log({ e })
    const currentState = { ...profilesData }
    currentState[key] = { ...profilesData[key], isSelected: e }
    setProfilesData(currentState)
  }
}

const drawerWidth = 200

const useStyles = makeStyles(theme => ({
  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: -12,
  },
  sectionTitle: {
    opacity: 0.6,
  },

  radioContainer: {
    padding: theme.spacing(3),
  },
  checkList: {
    padding: theme.spacing(3),
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    // [theme.breakpoints.up('sm')]: {
    //   display: 'none',
    // },
    zIndex: 100,
    position: 'absolute',
    top: 12,
    left: 32,
    // backgroundColor: '#2e2e2e',
    color: '#ffffff33',
    alignSelf: 'flex-start',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#1e1e1e',
  },
  linkRow: {
    padding: '8px 24px',
    color: theme.palette.primary,
    textDecoration: 'none',
    display: 'flex',
  },
}))

export default Navigation
