import activeMembers from './activeMembers';
import add from '../support/task';
import calf from '../support/calf';
import colouredDots from '../common/colouredDots';
import injectViewGuild from './injectViewGuild';
import manage from './manage';
import {guildXPLock, removeGuildAvyImgBorder} from './guildUtils';

export default function injectGuild() {
  add(3, colouredDots);
  add(3, removeGuildAvyImgBorder);
  add(3, guildXPLock);
  add(3, activeMembers);

  if (calf.subcmd === 'manage') {manage();}
  if (calf.subcmd === 'view') {injectViewGuild();}
}
