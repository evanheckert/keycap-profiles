/* eslint-disable camelcase */
import { cherryStem, cylindrical } from '../../constants'
import { ReactComponent as DCS_R0 } from './DCS_R0.svg'
import { ReactComponent as DCS_R1 } from './DCS_R1.svg'
import { ReactComponent as DCS_R2 } from './DCS_R2.svg'
import { ReactComponent as DCS_R3 } from './DCS_R3.svg'
import { ReactComponent as DCS_R4 } from './DCS_R4.svg'
import { ReactComponent as DCS_R5 } from './DCS_R5.svg'

const DCS = {
  faceShape: cylindrical,
  isSculpted: true,
  isSelected: true,
  label: 'DCS',
  manufacturer: 'Signature Plastics',
  R0: { svg: DCS_R0, depthMax: null, depthMin: null },
  R1: { svg: DCS_R1, depthMax: null, depthMin: null },
  R2: { svg: DCS_R2, depthMax: null, depthMin: null },
  R3: { svg: DCS_R3, depthMax: null, depthMin: null },
  R4: { svg: DCS_R4, depthMax: null, depthMin: null },
  R5: { svg: DCS_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default DCS
