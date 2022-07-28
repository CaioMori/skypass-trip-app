export function CpfMask(date: string) {
  const input = date.replace(/[^0-9]/g, '')
  return [
    //
    ['', input.slice(0, 3)],
    ['.', input.slice(3, 6)],
    ['.', input.slice(6, 9)],
    ['-', input.slice(9, 12)],
  ]
    .filter((pair) => pair[1].length > 0)
    .flat()
    .join('')
}

export function odometerMask(value: string) {
  const input = value.replace(/[^0-9]{1,10}/g, '')
  return input
}
