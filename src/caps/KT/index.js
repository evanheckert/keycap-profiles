/* eslint-disable camelcase */
import { cherryStem, cylindrical } from '../../constants'
import { ReactComponent as KT_R0 } from './KT_R0.svg'
import { ReactComponent as KT_R1 } from './KT_R1.svg'
import { ReactComponent as KT_R2 } from './KT_R2.svg'
import { ReactComponent as KT_R3 } from './KT_R3.svg'
import { ReactComponent as KT_R4 } from './KT_R4.svg'
import { ReactComponent as KT_R5 } from './KT_R5.svg'

const KT = {
  faceShape: cylindrical,
  isSculpted: false,
  isSelected: true,
  label: 'KT',
  manufacturer: 'Signature Plastics',
  R0: { svg: KT_R0, depthMax: null, depthMin: null },
  R1: { svg: KT_R1, depthMax: null, depthMin: null },
  R2: { svg: KT_R2, depthMax: null, depthMin: null },
  R3: { svg: KT_R3, depthMax: null, depthMin: null },
  R4: { svg: KT_R4, depthMax: null, depthMin: null },
  R5: { svg: KT_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default KT
