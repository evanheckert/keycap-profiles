import { type MotionValue, useMotionValue } from 'motion/react'
import { useEffect, useLayoutEffect, useState } from 'react'

const ROW_WIDTH = 1400
const ROW_GUTTER = 32

const getRowScale = (width: number): number => (width > ROW_WIDTH ? 1 : (width - ROW_GUTTER) / ROW_WIDTH)

type RowLayout = {
  ref: (element: HTMLDivElement | null) => void
  rowScale: MotionValue<number>
  /** Measured content width in px; undefined until the first measurement. */
  width: number | undefined
}

/** Measures the screen container with a ResizeObserver and scales the 1400px-wide keycap rows to fit it. */
export const useRowLayout = (): RowLayout => {
  const [element, setElement] = useState<HTMLDivElement | null>(null)
  const [width, setWidth] = useState<number | undefined>()
  const rowScale = useMotionValue(getRowScale(width ?? 800))

  useLayoutEffect(() => {
    if (!element) return
    setWidth(element.getBoundingClientRect().width)
    const observer = new ResizeObserver(() => setWidth(element.getBoundingClientRect().width))
    observer.observe(element)
    return () => observer.disconnect()
  }, [element])

  useEffect(() => {
    if (width !== undefined) rowScale.set(getRowScale(width))
  }, [width, rowScale])

  return { ref: setElement, rowScale, width }
}
