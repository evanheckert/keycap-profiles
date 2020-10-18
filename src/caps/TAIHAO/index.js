/* eslint-disable camelcase */
import { cherryStem, cylindrical } from '../../utils/constants'
import TAIHAO_R0 from './TAI_HAO_R0'
import TAIHAO_R1 from './TAI_HAO_R1'
import TAIHAO_R2 from './TAI_HAO_R2'
import TAIHAO_R3 from './TAI_HAO_R3'
import TAIHAO_R4 from './TAI_HAO_R4'
import TAIHAO_R5 from './TAI_HAO_R5'

const TAIHAO = {
  faceShape: cylindrical,
  isSculpted: true,
  isSelected: true,
  label: 'TAI HAO',
  manufacturer: 'TAI HAO',
  R0: { svg: TAIHAO_R0, depthMax: null, depthMin: null },
  R1: { svg: TAIHAO_R1, depthMax: null, depthMin: null },
  R2: { svg: TAIHAO_R2, depthMax: null, depthMin: null },
  R3: { svg: TAIHAO_R3, depthMax: null, depthMin: null },
  R4: { svg: TAIHAO_R4, depthMax: null, depthMin: null },
  R5: { svg: TAIHAO_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default TAIHAO
