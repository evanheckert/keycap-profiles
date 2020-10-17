/* eslint-disable camelcase */
import { cherryStem, spherical } from '../../constants'
import { ReactComponent as MDA_R0 } from './MDA_R0.svg'
import { ReactComponent as MDA_R1 } from './MDA_R1.svg'
import { ReactComponent as MDA_R2 } from './MDA_R2.svg'
import { ReactComponent as MDA_R3 } from './MDA_R3.svg'
import { ReactComponent as MDA_R4 } from './MDA_R4.svg'
import { ReactComponent as MDA_R5 } from './MDA_R5.svg'

const MDA = {
  faceShape: spherical,
  isSculpted: true,
  isSelected: true,
  label: 'MDA',
  manufacturer: null,
  R0: { svg: MDA_R0, depthMax: null, depthMin: null },
  R1: { svg: MDA_R1, depthMax: null, depthMin: null },
  R2: { svg: MDA_R2, depthMax: null, depthMin: null },
  R3: { svg: MDA_R3, depthMax: null, depthMin: null },
  R4: { svg: MDA_R4, depthMax: null, depthMin: null },
  R5: { svg: MDA_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default MDA
