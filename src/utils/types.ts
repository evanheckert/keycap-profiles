import { FC } from 'react'

interface KeySvgProps {
  stroke?: string
}

export type KeycapProps = {
  svg: FC<KeySvgProps>
  depthMax?: number | null
  depthMin?: number | null
}

export type KeycapProfileProps = {
  faceShape: string
  isSculpted: boolean
  isSelected: boolean
  label: string
  manufacturer: string | null
  R0: KeycapProps
  R1: KeycapProps
  R2: KeycapProps
  R3: KeycapProps
  R4: KeycapProps
  R5: KeycapProps
  sizeX: number | null
  sizeY: number | null
  sizeZmax: number | null
  sizeZmin: number | null
  stemSupport: string
}
