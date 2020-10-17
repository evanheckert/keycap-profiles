/* eslint-disable camelcase */
import { chocStem, spherical } from '../../constants'
import { ReactComponent as MBK_R0 } from './MBK_R0.svg'
import { ReactComponent as MBK_R1 } from './MBK_R1.svg'
import { ReactComponent as MBK_R2 } from './MBK_R2.svg'
import { ReactComponent as MBK_R3 } from './MBK_R3.svg'
import { ReactComponent as MBK_R4 } from './MBK_R4.svg'
import { ReactComponent as MBK_R5 } from './MBK_R5.svg'

const MBK = {
  faceShape: spherical,
  isSculpted: false,
  isSelected: true,
  label: 'MBK',
  manufacturer: null,
  R0: { svg: MBK_R0, depthMax: null, depthMin: null },
  R1: { svg: MBK_R1, depthMax: null, depthMin: null },
  R2: { svg: MBK_R2, depthMax: null, depthMin: null },
  R3: { svg: MBK_R3, depthMax: null, depthMin: null },
  R4: { svg: MBK_R4, depthMax: null, depthMin: null },
  R5: { svg: MBK_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: chocStem,
}

export default MBK
