import { atom } from 'recoil'
import { PROFILES } from './constants'

export const navbarState = atom({
  key: 'isSidebarOpen', // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
})

export const modeState = atom({
  key: 'mode',
  default: 'LIST',
})

export const profilesDataState = atom({
  key: 'mode',
  default: { ...PROFILES },
})

export const spacingState = atom({
  key: 'spacing',
  default: 1.905,
})
