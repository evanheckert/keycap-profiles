/* eslint-disable camelcase */
import { cherryStem, spherical } from '../../constants'
import { ReactComponent as MT3_R0 } from './MT3_R0.svg'
import { ReactComponent as MT3_R1 } from './MT3_R1.svg'
import { ReactComponent as MT3_R2 } from './MT3_R2.svg'
import { ReactComponent as MT3_R3 } from './MT3_R3.svg'
import { ReactComponent as MT3_R4 } from './MT3_R4.svg'
import { ReactComponent as MT3_R5 } from './MT3_R5.svg'

const MT3 = {
  faceShape: spherical,
  isSculpted: true,
  isSelected: true,
  label: 'MT3',
  manufacturer: null,
  R0: { svg: MT3_R0, depthMax: null, depthMin: null },
  R1: { svg: MT3_R1, depthMax: null, depthMin: null },
  R2: { svg: MT3_R2, depthMax: null, depthMin: null },
  R3: { svg: MT3_R3, depthMax: null, depthMin: null },
  R4: { svg: MT3_R4, depthMax: null, depthMin: null },
  R5: { svg: MT3_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default MT3
