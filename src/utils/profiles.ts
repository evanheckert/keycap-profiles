import APPLE from '../caps/APPLE'
import CHERRY from '../caps/Cherry'
import DCX from '../caps/DCX'
import DSA from '../caps/DSA'
import DSS from '../caps/DSS'
import G20 from '../caps/G20'
import KAM from '../caps/KAM'
import KAT from '../caps/KAT'
import KT from '../caps/KT'
import MBK from '../caps/MBK'
// import TAIHAO from '../caps/TAIHAO'
import MDA from '../caps/MDA'
import MT3 from '../caps/MT3'
import OEM from '../caps/OEM'
import SA from '../caps/SA'
import XDA from '../caps/XDA'
import type { KeycapProfileProps } from './types'

const PROFILES: Record<string, KeycapProfileProps> = {
  SA,
  MT3,
  // TAIHAO,
  MDA,
  OEM,
  KT,
  KAT,
  DSS,
  DCX,
  CHERRY,
  KAM,
  XDA,
  DSA,
  G20,
  MBK,
  APPLE,
}

export default PROFILES
