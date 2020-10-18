/* eslint-disable camelcase */
import { cherryStem, cylindrical } from '../../utils/constants'
import TAI_HAO_R0 from './TAI_HAO_R0'
import TAI_HAO_R1 from './TAI_HAO_R1'
import TAI_HAO_R2 from './TAI_HAO_R2'
import TAI_HAO_R3 from './TAI_HAO_R3'
import TAI_HAO_R4 from './TAI_HAO_R4'
import TAI_HAO_R5 from './TAI_HAO_R5'

const TAI_HAO = {
  faceShape: cylindrical,
  isSculpted: true,
  isSelected: true,
  label: 'TAI HAO',
  manufacturer: 'TAI HAO',
  R0: { svg: TAI_HAO_R0, depthMax: null, depthMin: null },
  R1: { svg: TAI_HAO_R1, depthMax: null, depthMin: null },
  R2: { svg: TAI_HAO_R2, depthMax: null, depthMin: null },
  R3: { svg: TAI_HAO_R3, depthMax: null, depthMin: null },
  R4: { svg: TAI_HAO_R4, depthMax: null, depthMin: null },
  R5: { svg: TAI_HAO_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default TAI_HAO
