/* eslint-disable camelcase */
import { cherryStem, flat } from '../../constants'
import { ReactComponent as G20_R0 } from './G20_R0.svg'
import { ReactComponent as G20_R1 } from './G20_R1.svg'
import { ReactComponent as G20_R2 } from './G20_R2.svg'
import { ReactComponent as G20_R3 } from './G20_R3.svg'
import { ReactComponent as G20_R4 } from './G20_R4.svg'
import { ReactComponent as G20_R5 } from './G20_R5.svg'

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
