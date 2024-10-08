const craftType = [
  'Perfect',
  'Excellent',
  'Very Good',
  'Good',
  'Average',
  'Poor',
  'Uncrafted',
];

const top = (o) => ({
  bound: o.bn ?? false,
  craft: o.cr ? craftType[o.cf] : '',
  ...((o.cd ?? null) !== null && { durability: o.cd }),
  equipped: o.equipped ?? false,
});

const bottom = (o) => ({
  ...(o.folder_id && { folder_id: o.folder_id }),
  forge: o.hf ?? 0,
  guild_tag: o.tg ?? -1,
  inv_id: o.a,
  item_id: o.b,
  item_name: o.n,
  ...(o.md && { max_durability: o.md }),
  ...(o.player?.id && { player_id: o.player.id }),
  rarity: o.r,
  stats: { min_level: o.l, set_name: '' },
  type: o.t,
});

export default function basicItem(o) {
  return o
    ? {
        ...top(o),
        ...bottom(o),
      }
    : {};
}
