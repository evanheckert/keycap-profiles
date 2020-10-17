/* eslint-diDSAble camelcase */
import { cherryStem, spherical } from '../../constants'
import { ReactComponent as DSA_R0 } from './DSA_R0.svg'
import { ReactComponent as DSA_R1 } from './DSA_R1.svg'
import { ReactComponent as DSA_R2 } from './DSA_R2.svg'
import { ReactComponent as DSA_R3 } from './DSA_R3.svg'
import { ReactComponent as DSA_R4 } from './DSA_R4.svg'
import { ReactComponent as DSA_R5 } from './DSA_R5.svg'

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
