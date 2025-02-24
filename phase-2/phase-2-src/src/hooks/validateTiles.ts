export default function validateTiles(
  _tiles: Tile[],
  _safeTiles: { id: PosId }[]
): boolean {
  for (let i = 0; i < _tiles.length; i++) {
    const isSafe = !!_safeTiles.filter(
      (safeTile) => safeTile.id === _tiles[i].id
    ).length;
    const isMachine = ["washer", "dryer"].includes(_tiles[i].type);
    if (!isSafe && isMachine) {
      return true;
    }
  }
  return false;
}
