export const capitalize = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export const abilitiesMessages = (isHidden: boolean) => {
  if(isHidden)
    return "You need to unlock this ability"
  
  return "You can use this ability"
}

export const users = [
  {
    email: 'superadmin@gmail.com',
    password: '1234567'
  },
  {
    email: 'admin@gmail.com',
    password: '7654321'
  },
  {
    email: 'reader@gmail.com',
    password: '1234567890'
  }
]

export const validateSession = () => {
  const userAlreadiExists = JSON.parse(sessionStorage.getItem('user') + '')
  if(userAlreadiExists && userAlreadiExists.email && userAlreadiExists.password)
    return true
  return false
}

export const deleteSession = () => {
  sessionStorage.removeItem('user')
}
