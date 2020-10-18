/* eslint-disable camelcase */
import { cherryStem, spherical } from '../../utils/constants'
import MT3_R0 from './MT3_R0'
import MT3_R1 from './MT3_R1'
import MT3_R2 from './MT3_R2'
import MT3_R3 from './MT3_R3'
import MT3_R4 from './MT3_R4'
import MT3_R5 from './MT3_R5'

const MT3 = {
  faceShape: spherical,
  isSculpted: true,
  isSelected: true,
  label: 'MT3',
  manufacturer: null,
  R0: { svg: MT3_R0, depthMax: null, depthMin: null },
  R1: { svg: MT3_R1, depthMax: null, depthMin: null },
  R2: { svg: MT3_R2, depthMax: null, depthMin: null },
  R3: { svg: MT3_R3, depthMax: null, depthMin: null },
  R4: { svg: MT3_R4, depthMax: null, depthMin: null },
  R5: { svg: MT3_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default MT3
