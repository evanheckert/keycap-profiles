/* eslint-disable camelcase */
import { cherryStem, cylindrical } from '../../utils/constants'
import DSS_R0 from './DSS_R0'
import DSS_R1 from './DSS_R1'
import DSS_R2 from './DSS_R2'
import DSS_R3 from './DSS_R3'
import DSS_R4 from './DSS_R4'
import DSS_R5 from './DSS_R5'

const DSS = {
  faceShape: cylindrical,
  isSculpted: true,
  isSelected: true,
  label: 'DSS',
  manufacturer: 'Signature Plastics',
  R0: { svg: DSS_R0, depthMax: null, depthMin: null },
  R1: { svg: DSS_R1, depthMax: null, depthMin: null },
  R2: { svg: DSS_R2, depthMax: null, depthMin: null },
  R3: { svg: DSS_R3, depthMax: null, depthMin: null },
  R4: { svg: DSS_R4, depthMax: null, depthMin: null },
  R5: { svg: DSS_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default DSS
