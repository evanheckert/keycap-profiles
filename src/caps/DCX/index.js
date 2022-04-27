/* eslint-disable camelcase */
import { cherryStem, cylindrical } from '../../utils/constants'

import DCX_R0 from './DCX_R0'
import DCX_R1 from './DCX_R1'
import DCX_R2 from './DCX_R2'
import DCX_R3 from './DCX_R3'
import DCX_R4 from './DCX_R4'
import DCX_R5 from './DCX_R5'

const DCX = {
  faceShape: cylindrical,
  isSculpted: true,
  isSelected: true,
  label: 'DCX',
  manufacturer: null,
  R0: { svg: DCX_R0, depthMax: null, depthMin: null },
  R1: { svg: DCX_R1, depthMax: null, depthMin: null },
  R2: { svg: DCX_R2, depthMax: null, depthMin: null },
  R3: { svg: DCX_R3, depthMax: null, depthMin: null },
  R4: { svg: DCX_R4, depthMax: null, depthMin: null },
  R5: { svg: DCX_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default DCX
