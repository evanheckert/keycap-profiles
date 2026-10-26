import { useAtomValue } from 'jotai'
import { AnimatePresence, motion } from 'motion/react'

import KeycapRow from '@/components/KeycapRow'
import ScreenHeader from '@/components/ScreenHeader'
import { useRowLayout } from '@/hooks/useRowLayout'
import { selectedStackState } from '@/utils/atoms'
import PROFILES from '@/utils/profiles'

const COLORS = ['#00FF00', '#FF9900', '#00FFFF', '#FF005B', '#AA66FF']

const StackScreen = () => {
  const { ref, rowScale, width } = useRowLayout()
  const selectedProfiles = useAtomValue(selectedStackState)

  return (
    <div ref={ref}>
      <ScreenHeader />

      {width !== undefined && (
        <div
          className='relative min-h-px min-w-px flex-auto overflow-hidden rounded bg-black p-6'
          style={{ minHeight: (((width - 32) * 3) / 14) * (selectedProfiles.length + 1) }}
        >
          <AnimatePresence>
            {selectedProfiles.map((key, index) => (
              <KeycapRow key={key} color={COLORS[index]} stackMode={true} index={index} profileData={PROFILES[key]} rowScale={rowScale} />
            ))}
          </AnimatePresence>

          <motion.div style={{ originX: 0, originY: 0, scale: rowScale }}>
            <AnimatePresence>
              {selectedProfiles.map((key, index) => (
                <motion.div layout key={key} style={{ color: COLORS[index] }}>
                  <h2 className='w-[300px] truncate text-5xl leading-[1.334] opacity-80'>{key}</h2>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default StackScreen
