/* eslint-disable camelcase */
import { cherryStem, spherical } from '../../utils/constants'
import XDA_R0 from './XDA_R0'
import XDA_R1 from './XDA_R1'
import XDA_R2 from './XDA_R2'
import XDA_R3 from './XDA_R3'
import XDA_R4 from './XDA_R4'
import XDA_R5 from './XDA_R5'

const XDA = {
  faceShape: spherical,
  isSculpted: false,
  isSelected: true,
  label: 'XDA',
  manufacturer: null,
  R0: { svg: XDA_R0, depthMax: null, depthMin: null },
  R1: { svg: XDA_R1, depthMax: null, depthMin: null },
  R2: { svg: XDA_R2, depthMax: null, depthMin: null },
  R3: { svg: XDA_R3, depthMax: null, depthMin: null },
  R4: { svg: XDA_R4, depthMax: null, depthMin: null },
  R5: { svg: XDA_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default XDA
