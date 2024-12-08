import { WallpaperItem } from '@/domain';

import { hongjoong } from './hongjoong';
import { seonghwa } from './seonghwa';
import { yunho } from './yunho';
import { yeosang } from './yeosang';
import { san } from './san';
import { mingi } from './mingi';
import { wooyoung } from './wooyoung';
import { jongho } from './jongho';
import { ateez } from './ateez';

export const wallpaperList: WallpaperItem[] = [
  ...hongjoong,
  ...seonghwa,
  ...yunho,
  ...yeosang,
  ...san,
  ...mingi,
  ...wooyoung,
  ...hongjoong,
  ...jongho,
  ...ateez,
];
