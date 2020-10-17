/* eslint-disable camelcase */
import { cylindrical, mlStem } from '../../constants'
import { ReactComponent as LP_R0 } from './LP_R0.svg'
import { ReactComponent as LP_R1 } from './LP_R1.svg'
import { ReactComponent as LP_R2 } from './LP_R2.svg'
import { ReactComponent as LP_R3 } from './LP_R3.svg'
import { ReactComponent as LP_R4 } from './LP_R4.svg'
import { ReactComponent as LP_R5 } from './LP_R5.svg'

const LP = {
  faceShape: cylindrical,
  isSculpted: false,
  isSelected: true,
  label: 'LP',
  manufacturer: 'Signature Plastics',
  R0: { svg: LP_R0, depthMax: null, depthMin: null },
  R1: { svg: LP_R1, depthMax: null, depthMin: null },
  R2: { svg: LP_R2, depthMax: null, depthMin: null },
  R3: { svg: LP_R3, depthMax: null, depthMin: null },
  R4: { svg: LP_R4, depthMax: null, depthMin: null },
  R5: { svg: LP_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: mlStem,
}

export default LP
