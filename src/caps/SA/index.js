/* eslint-disable camelcase */
import { cherryStem, flat } from '../../constants'

import { ReactComponent as SA_R0 } from './SA R0.svg'
import { ReactComponent as SA_R1 } from './SA R1.svg'
import { ReactComponent as SA_R2 } from './SA R2.svg'
import { ReactComponent as SA_R3 } from './SA R3.svg'
import { ReactComponent as SA_R4 } from './SA R4.svg'
import { ReactComponent as SA_R5 } from './SA R5.svg'

const SA = {
  faceShape: flat,
  isSculpted: false,
  isSelected: true,
  label: 'SA',
  manufacturer: 'Signature Plastics',
  R0: { svg: SA_R0, depthMax: null, depthMin: null },
  R1: { svg: SA_R1, depthMax: null, depthMin: null },
  R2: { svg: SA_R2, depthMax: null, depthMin: null },
  R3: { svg: SA_R3, depthMax: null, depthMin: null },
  R4: { svg: SA_R4, depthMax: null, depthMin: null },
  R5: { svg: SA_R5, depthMax: null, depthMin: null },
  sizeX: null,
  sizeY: null,
  sizeZmax: null,
  sizeZmin: null,
  stemSupport: cherryStem,
}

export default SA
