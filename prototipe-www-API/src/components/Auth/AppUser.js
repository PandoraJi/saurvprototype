const isBrowser = typeof window !== `undefined`

export const setUser = user =>
  (window.localStorage.prototipeUser = JSON.stringify(user))

const getUser = () => {
  if (window.localStorage.prototipeUser) {
    let user = JSON.parse(window.localStorage.prototipeUser)
    return user ? user : {}
  }
  return {}
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()
  if (user) return !!user.userId
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return
  setUser({})
  localStorage.setItem('AUTH_TOKEN', null);
  localStorage.setItem('USER_ID', null);
  callback()
}
