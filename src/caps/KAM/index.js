/* eslint-disable camelcase */
import { cherryStem, spherical } from '../../utils/constants'
import KAM_R0 from './KAM_R0'
import KAM_R1 from './KAM_R1'
import KAM_R2 from './KAM_R2'
import KAM_R3 from './KAM_R3'
import KAM_R4 from './KAM_R4'
import KAM_R5 from './KAM_R5'

const KAM = {
  faceShape: spherical,
  isSculpted: true,
  isSelected: true,
  label: 'KAM',
  manufacturer: null,
  R0: { svg: KAM_R0, depthMax: null, depthMin: null },
  R1: { svg: KAM_R1, depthMax: null, depthMin: null },
  R2: { svg: KAM_R2, depthMax: null, depthMin: null },
  R3: { svg: KAM_R3, depthMax: null, depthMin: null },
  R4: { svg: KAM_R4, depthMax: null, depthMin: null },
  R5: { svg: KAM_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default KAM
