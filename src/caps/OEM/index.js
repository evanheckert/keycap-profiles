/* eslint-disable camelcase */
import { cherryStem, cylindrical } from '../../utils/constants'
import OEM_R0 from './OEM_R0'
import OEM_R1 from './OEM_R1'
import OEM_R2 from './OEM_R2'
import OEM_R3 from './OEM_R3'
import OEM_R4 from './OEM_R4'
import OEM_R5 from './OEM_R5'

const OEM = {
  faceShape: cylindrical,
  isSculpted: true,
  isSelected: true,
  label: 'OEM',
  manufacturer: null,
  R0: { svg: OEM_R0, depthMax: null, depthMin: null },
  R1: { svg: OEM_R1, depthMax: null, depthMin: null },
  R2: { svg: OEM_R2, depthMax: null, depthMin: null },
  R3: { svg: OEM_R3, depthMax: null, depthMin: null },
  R4: { svg: OEM_R4, depthMax: null, depthMin: null },
  R5: { svg: OEM_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default OEM
