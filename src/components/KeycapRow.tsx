import { useAtomValue } from 'jotai'
import { type MotionValue, motion, useTransform } from 'motion/react'
import { memo } from 'react'

import { spacingState } from '@/utils/atoms'
import type { KeycapProfileProps } from '@/utils/types'
import { tls } from '@/utils/utils'

import Keycap from './Keycap'

const ROWS = ['R0', 'R1', 'R2', 'R3', 'R4', 'R5'] as const

type KeycapRowProps = {
  profileData: KeycapProfileProps
  rowScale: MotionValue<number>
  index: number
  stackMode?: boolean
  color?: string
}
const KeycapRow = memo(({ profileData, rowScale, index, stackMode = false, color }: KeycapRowProps) => {
  const spacingName = useAtomValue(spacingState)
  const spacing = spacingName === 'CHERRYMX' ? 1.905 : 1.7
  const rowHeight = useTransform(rowScale, latest => 300 * latest)
  const listModeY = useTransform(rowHeight, latest => index * latest + 20)
  const y = stackMode ? 20 : listModeY
  const showGuides = index === 0 || !stackMode

  return (
    <motion.div
      layout
      className='absolute top-0 left-4 h-[300px] w-[1400px]'
      style={{ originX: 0, originY: 0, scale: rowScale, y }}
      exit={{ opacity: 0 }}
    >
      <div className='relative flex h-[300px] w-[1400px] items-start justify-end overflow-hidden'>
        {showGuides && (
          <>
            <div className='absolute top-0 right-0 left-0 h-px border-t-3 border-[grey]' />
            <div className='absolute top-[25px] right-0 left-0 h-px border-t-3 border-[grey] opacity-50' />
            <div className='absolute top-[125px] right-0 left-0 h-px border-t-3 border-[grey] opacity-50' />
            <div className='absolute top-[225px] right-0 left-0 h-px border-t-3 border-[grey]' />
          </>
        )}

        {!stackMode && <h2 className='absolute left-0 w-[300px] truncate text-5xl leading-[1.334] opacity-80'>{profileData.label}</h2>}

        {ROWS.map((row, ind) => (
          <Keycap color={color} index={ind} key={row} spacing={spacing} SvgComponent={profileData[row].svg} />
        ))}

        {(showGuides ? [0, 1, 2, 3] : []).map(val => (
          <div
            key={val}
            className='absolute bottom-[15px] flex h-[75px] items-end justify-center border-r border-[#00FFFF99] pb-2.5'
            style={{
              width: 100 * spacing,
              right: (val + 0.6) * (100 * spacing),
              borderLeftWidth: val === 3 ? 1 : 0,
            }}
          >
            <p className='text-2xl/normal text-primary opacity-50'>{tls(10 * spacing, 2)} mm</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
})

export default KeycapRow
