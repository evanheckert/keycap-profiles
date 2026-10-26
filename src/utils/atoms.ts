import { atom } from 'jotai'

import PROFILES from './profiles'

export type Spacing = 'CHERRYMX' | 'CHOC'

export const profilesDataState = atom({ ...PROFILES })

export const selectedProfilesState = atom<string[]>(Object.keys(PROFILES))

export const selectedStackState = atom<string[]>(['CHERRY', 'SA'])

export const spacingState = atom<Spacing>('CHERRYMX')
