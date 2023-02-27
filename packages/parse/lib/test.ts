export const contains = <T extends string>(text: T, pattern: string) => text.indexOf(pattern) >= 0

export function lol<Bar extends string, T extends Record<Bar, number>>(bar: Bar): T {
  if(false || Math.random() > 0.5) {
    return {bar: 3} as unknown as T
  }
  return {bar: 4} as unknown as T
}

export function cool(bar: string): number { return Number(bar) }