export default function add(a, b) {
  if (a | (a == 0) && b | (b == 0)) {
    return a + b;
  }
  return false;
}
