/* eslint-disable camelcase */
import { cherryStem, cylindrical } from '../../constants'
import { ReactComponent as OEM_R0 } from './OEM_R0.svg'
import { ReactComponent as OEM_R1 } from './OEM_R1.svg'
import { ReactComponent as OEM_R2 } from './OEM_R2.svg'
import { ReactComponent as OEM_R3 } from './OEM_R3.svg'
import { ReactComponent as OEM_R4 } from './OEM_R4.svg'
import { ReactComponent as OEM_R5 } from './OEM_R5.svg'

const OEM = {
  faceShape: cylindrical,
  isSculpted: true,
  isSelected: true,
  label: 'OEM',
  manufacturer: null,
  R0: { svg: OEM_R0, depthMax: null, depthMin: null },
  R1: { svg: OEM_R1, depthMax: null, depthMin: null },
  R2: { svg: OEM_R2, depthMax: null, depthMin: null },
  R3: { svg: OEM_R3, depthMax: null, depthMin: null },
  R4: { svg: OEM_R4, depthMax: null, depthMin: null },
  R5: { svg: OEM_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default OEM
