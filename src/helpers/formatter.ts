export const cpfFormatter = (cpf: string): string => {
  cpf = cpf.split('.').join('')
  cpf = cpf.split('-').join('')
  return cpf
}

export const nameFormatter = (name: string): string => {
  name = name.toLowerCase()
  const aux = name.split(' ')
  return `${aux[0].charAt(0).toUpperCase() + aux[0].slice(1)} ${
    aux[aux.length - 1].charAt(0).toUpperCase() + aux[aux.length - 1].slice(1)
  }`
}
