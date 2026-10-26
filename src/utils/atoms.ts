import { atom } from 'recoil'

import PROFILES from './profiles'

export const navbarState = atom({
  key: 'isSidebarOpen', // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
})

export const modeState = atom({
  key: 'mode',
  default: 'LIST',
})

export const profilesDataState = atom({
  key: 'profilesData',
  default: { ...PROFILES },
})

export const selectedProfilesState = atom({
  key: 'selectedProfiles',
  default: [...Object.keys(PROFILES)],
})

export const selectedStackState = atom({
  key: 'selectedStack',
  default: ['CHERRY', 'SA'],
})

export const spacingState = atom({
  key: 'spacing',
  default: 'CHERRYMX',
})
