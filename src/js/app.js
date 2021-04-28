export default function sortByHp(array) {
  return array.sort((a, b) => (a.health < b.health ? 1 : -1));
}
