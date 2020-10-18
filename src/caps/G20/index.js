/* eslint-disable camelcase */
import { cherryStem, flat } from '../../utils/constants'
import G20_R0 from './G20_R0'
import G20_R1 from './G20_R1'
import G20_R2 from './G20_R2'
import G20_R3 from './G20_R3'
import G20_R4 from './G20_R4'
import G20_R5 from './G20_R5'

const G20 = {
  faceShape: flat,
  isSculpted: false,
  isSelected: true,
  label: 'G20',
  manufacturer: null,
  R0: { svg: G20_R0, depthMax: null, depthMin: null },
  R1: { svg: G20_R1, depthMax: null, depthMin: null },
  R2: { svg: G20_R2, depthMax: null, depthMin: null },
  R3: { svg: G20_R3, depthMax: null, depthMin: null },
  R4: { svg: G20_R4, depthMax: null, depthMin: null },
  R5: { svg: G20_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default G20
