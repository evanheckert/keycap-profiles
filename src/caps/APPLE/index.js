/* eslint-disable camelcase */
import { cherryStem, flat } from '../../utils/constants'
import APPLE_R0 from './APPLE_R0'
import APPLE_R1 from './APPLE_R1'
import APPLE_R2 from './APPLE_R2'
import APPLE_R3 from './APPLE_R3'
import APPLE_R4 from './APPLE_R4'
import APPLE_R5 from './APPLE_R5'

const APPLE = {
  faceShape: flat,
  isSculpted: false,
  isSelected: true,
  label: 'Apple Magic Keycaps',
  manufacturer: 'Apple, Inc.',
  R0: { svg: APPLE_R0, depthMax: null, depthMin: null },
  R1: { svg: APPLE_R1, depthMax: null, depthMin: null },
  R2: { svg: APPLE_R2, depthMax: null, depthMin: null },
  R3: { svg: APPLE_R3, depthMax: null, depthMin: null },
  R4: { svg: APPLE_R4, depthMax: null, depthMin: null },
  R5: { svg: APPLE_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default APPLE
