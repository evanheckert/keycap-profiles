/* eslint-disable camelcase */
import { cherryStem, spherical } from '../../constants'
import { ReactComponent as KAM_R0 } from './KAM_R0.svg'
import { ReactComponent as KAM_R1 } from './KAM_R1.svg'
import { ReactComponent as KAM_R2 } from './KAM_R2.svg'
import { ReactComponent as KAM_R3 } from './KAM_R3.svg'
import { ReactComponent as KAM_R4 } from './KAM_R4.svg'
import { ReactComponent as KAM_R5 } from './KAM_R5.svg'

const KAM = {
  faceShape: spherical,
  isSculpted: true,
  isSelected: true,
  label: 'KAM',
  manufacturer: null,
  R0: { svg: KAM_R0, depthMax: null, depthMin: null },
  R1: { svg: KAM_R1, depthMax: null, depthMin: null },
  R2: { svg: KAM_R2, depthMax: null, depthMin: null },
  R3: { svg: KAM_R3, depthMax: null, depthMin: null },
  R4: { svg: KAM_R4, depthMax: null, depthMin: null },
  R5: { svg: KAM_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default KAM
