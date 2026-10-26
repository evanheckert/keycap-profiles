import * as Dialog from '@radix-ui/react-dialog'
import { Link, useLocation } from '@tanstack/react-router'
import { useAtom } from 'jotai'
import { Menu } from 'lucide-react'
import { memo } from 'react'

import { type Spacing, selectedProfilesState, selectedStackState, spacingState } from '@/utils/atoms'
import PROFILES from '@/utils/profiles'

const allKeys = Object.keys(PROFILES)

const SPACING_OPTIONS: ReadonlyArray<{ value: Spacing; label: string }> = [
  { value: 'CHERRYMX', label: 'Cherry MX' },
  { value: 'CHOC', label: 'Choc' },
]

const linkClassName = 'flex px-6 py-2 no-underline'
const activeLinkProps = { className: 'bg-[#ffffff11] text-white' }
const inactiveLinkProps = { className: 'text-[#ffffff99]' }

const DrawerContents = () => {
  const [spacing, setSpacing] = useAtom(spacingState)
  const [selectedProfiles, setSelectedProfiles] = useAtom(selectedProfilesState)
  const [selectedStack, setSelectedStack] = useAtom(selectedStackState)
  const isStack = useLocation({ select: location => location.pathname !== '/' })
  const selectedKeys = isStack ? selectedStack : selectedProfiles

  const handleCheck = (checked: boolean, key: string) => {
    const setSelected = isStack ? setSelectedStack : setSelectedProfiles
    setSelected(current => (checked ? [...current, key] : current.filter(x => x !== key)))
  }

  return (
    <div>
      <Link
        to='/'
        activeOptions={{ exact: true }}
        className={`mt-6 ${linkClassName}`}
        activeProps={activeLinkProps}
        inactiveProps={inactiveLinkProps}
      >
        List Mode
      </Link>

      <Link
        to='/stack'
        activeOptions={{ exact: true }}
        className={linkClassName}
        activeProps={activeLinkProps}
        inactiveProps={inactiveLinkProps}
      >
        Stack Mode
      </Link>

      <fieldset className='flex flex-col p-6'>
        <legend className='float-left opacity-60'>Spacing</legend>
        {SPACING_OPTIONS.map(option => (
          <label key={option.value} className='-ml-[11px] flex cursor-pointer items-center'>
            <span className='flex p-[11px]'>
              <input
                type='radio'
                name='spacing'
                value={option.value}
                checked={spacing === option.value}
                onChange={() => setSpacing(option.value)}
                className='size-5 cursor-pointer accent-secondary'
              />
            </span>
            {option.label}
          </label>
        ))}
      </fieldset>

      <hr className='border-white/12' />

      <fieldset className='flex flex-col p-6'>
        <legend className='float-left opacity-60'>Profiles</legend>
        {allKeys.map(key => (
          <label key={key} className='-ml-3 flex cursor-pointer items-center'>
            <span className='flex p-[11px]'>
              <input
                type='checkbox'
                checked={selectedKeys.includes(key)}
                onChange={e => handleCheck(e.target.checked, key)}
                className='size-5 cursor-pointer accent-secondary'
              />
            </span>
            {PROFILES[key].label}
          </label>
        ))}
      </fieldset>
    </div>
  )
}

const Sidebar = memo(() => (
  <Dialog.Root>
    <Dialog.Trigger
      aria-label='open drawer'
      className='absolute top-3 left-8 z-100 -ml-3 cursor-pointer rounded-full p-3 text-[#ffffff33] hover:bg-white/8 sm:hidden'
    >
      <Menu className='size-6' />
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 z-1300 bg-black/50 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in sm:hidden' />
      <Dialog.Content
        aria-describedby={undefined}
        className='fixed inset-y-0 left-0 z-1300 w-[200px] overflow-y-auto bg-drawer shadow-2xl data-[state=closed]:animate-drawer-out data-[state=open]:animate-drawer-in sm:hidden'
      >
        <Dialog.Title className='sr-only'>Navigation</Dialog.Title>
        <DrawerContents />
      </Dialog.Content>
    </Dialog.Portal>

    <nav
      aria-label='Keycap profile options'
      className='fixed inset-y-0 left-0 z-1200 hidden w-[200px] overflow-y-auto border-r border-white/12 bg-drawer sm:block'
    >
      <DrawerContents />
    </nav>
  </Dialog.Root>
))

export default Sidebar
