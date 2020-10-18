/* eslint-disable camelcase */
import { cherryStem, cylindrical } from '../../utils/constants'

import Cherry_R0 from './Cherry_R0'
import Cherry_R1 from './Cherry_R1'
import Cherry_R2 from './Cherry_R2'
import Cherry_R3 from './Cherry_R3'
import Cherry_R4 from './Cherry_R4'
import Cherry_R5 from './Cherry_R5'

const Cherry = {
  faceShape: cylindrical,
  isSculpted: true,
  isSelected: true,
  label: 'Cherry/GMK',
  manufacturer: null,
  R0: { svg: Cherry_R0, depthMax: null, depthMin: null },
  R1: { svg: Cherry_R1, depthMax: null, depthMin: null },
  R2: { svg: Cherry_R2, depthMax: null, depthMin: null },
  R3: { svg: Cherry_R3, depthMax: null, depthMin: null },
  R4: { svg: Cherry_R4, depthMax: null, depthMin: null },
  R5: { svg: Cherry_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default Cherry
