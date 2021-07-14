function classnames(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ')
}

export function scopedClassMaker(prefix: string) {
  return function x(name?: string) {
    return [prefix, name].filter(Boolean).join('-')
  }
}

export default classnames
