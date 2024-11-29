export function dedupArray<T>(arr: T[]): T[] {
  const s = new Set(arr);
  return [...s];
}
