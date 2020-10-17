/* eslint-disable camelcase */
import { cherryStem, spherical } from '../../constants'
import { ReactComponent as KAT_R0 } from './KAT_R0.svg'
import { ReactComponent as KAT_R1 } from './KAT_R1.svg'
import { ReactComponent as KAT_R2 } from './KAT_R2.svg'
import { ReactComponent as KAT_R3 } from './KAT_R3.svg'
import { ReactComponent as KAT_R4 } from './KAT_R4.svg'
import { ReactComponent as KAT_R5 } from './KAT_R5.svg'

const KAT = {
  faceShape: spherical,
  isSculpted: true,
  isSelected: true,
  label: 'KAT',
  manufacturer: 'Signature Plastics',
  R0: { svg: KAT_R0, depthMax: null, depthMin: null },
  R1: { svg: KAT_R1, depthMax: null, depthMin: null },
  R2: { svg: KAT_R2, depthMax: null, depthMin: null },
  R3: { svg: KAT_R3, depthMax: null, depthMin: null },
  R4: { svg: KAT_R4, depthMax: null, depthMin: null },
  R5: { svg: KAT_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default KAT
