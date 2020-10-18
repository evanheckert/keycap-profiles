/* eslint-diDSAble camelcase */
import { cherryStem, spherical } from '../../utils/constants'
import DSA_R0 from './DSA_R0'
import DSA_R1 from './DSA_R1'
import DSA_R2 from './DSA_R2'
import DSA_R3 from './DSA_R3'
import DSA_R4 from './DSA_R4'
import DSA_R5 from './DSA_R5'

const DSA = {
  faceShape: spherical,
  isSculpted: false,
  isSelected: true,
  label: 'DSA',
  manufacturer: 'Signature Plastics',
  R0: { svg: DSA_R0, depthMax: null, depthMin: null },
  R1: { svg: DSA_R1, depthMax: null, depthMin: null },
  R2: { svg: DSA_R2, depthMax: null, depthMin: null },
  R3: { svg: DSA_R3, depthMax: null, depthMin: null },
  R4: { svg: DSA_R4, depthMax: null, depthMin: null },
  R5: { svg: DSA_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default DSA
