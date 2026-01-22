export type DebouncedFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void

export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay = 300,
): DebouncedFunction<T> {
  let timer: ReturnType<typeof setTimeout> | undefined

  return (...args: Parameters<T>) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
