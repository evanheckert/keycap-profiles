import { motion } from 'motion/react'

import type { KeySvgComponent } from '@/utils/types'

type KeycapProps = {
  index: number
  SvgComponent: KeySvgComponent
  spacing: number
  color?: string
}

const Keycap = ({ index, SvgComponent, spacing, color }: KeycapProps) => {
  const right = ((index === 0 ? 5.15 : 5 - index) + 0.1) * (100 * spacing)

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'tween', ease: [0.0, 0.0, 0.2, 1] }}
      className='absolute bottom-[75px] z-10 mt-[25px] box-border flex h-[200px] items-end justify-center'
      style={{ width: spacing * 100, right }}
    >
      <div className='mx-auto box-border h-[200px] w-[190.5px]'>
        <SvgComponent stroke={color} />
      </div>
    </motion.div>
  )
}

export default Keycap
