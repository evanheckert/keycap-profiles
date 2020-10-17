/* eslint-disable camelcase */
import { cherryStem, cylindrical } from '../../constants'
import { ReactComponent as Cherry_R0 } from './Cherry_R0.svg'
import { ReactComponent as Cherry_R1 } from './Cherry_R1.svg'
import { ReactComponent as Cherry_R2 } from './Cherry_R2.svg'
import { ReactComponent as Cherry_R3 } from './Cherry_R3.svg'
import { ReactComponent as Cherry_R4 } from './Cherry_R4.svg'
import { ReactComponent as Cherry_R5 } from './Cherry_R5.svg'

const Cherry = {
  faceShape: cylindrical,
  isSculpted: true,
  isSelected: true,
  label: 'Cherry/GMK',
  manufacturer: null,
  R0: { svg: Cherry_R0, depthMax: null, depthMin: null },
  R1: { svg: Cherry_R1, depthMax: null, depthMin: null },
  R2: { svg: Cherry_R2, depthMax: null, depthMin: null },
  R3: { svg: Cherry_R3, depthMax: null, depthMin: null },
  R4: { svg: Cherry_R4, depthMax: null, depthMin: null },
  R5: { svg: Cherry_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default Cherry
