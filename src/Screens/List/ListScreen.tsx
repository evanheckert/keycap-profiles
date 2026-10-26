import { useAtomValue } from 'jotai'
import { AnimatePresence } from 'motion/react'

import KeycapRow from '@/components/KeycapRow'
import ScreenHeader from '@/components/ScreenHeader'
import { useRowLayout } from '@/hooks/useRowLayout'
import { profilesDataState, selectedProfilesState } from '@/utils/atoms'

const ListScreen = () => {
  const { ref, rowScale, width } = useRowLayout()
  const profilesData = useAtomValue(profilesDataState)
  const selectedProfiles = useAtomValue(selectedProfilesState)
  const profiles = selectedProfiles.filter(key => profilesData[key].isSelected)

  return (
    <div ref={ref}>
      <ScreenHeader />

      {width !== undefined && (
        <div
          className='relative min-h-px min-w-px flex-auto overflow-hidden rounded bg-black p-6'
          style={{ minHeight: (((width - 32) * 3) / 14) * (profiles.length + 1) }}
        >
          <AnimatePresence>
            {profiles.map((key, index) => (
              <KeycapRow key={key} index={index} profileData={profilesData[key]} rowScale={rowScale} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

export default ListScreen
