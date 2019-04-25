export function isAuthPath(path) {
  // Other routes can be added like /forgot-password, etc
  return (
    path === '/login' ||
    path === '/register' ||
    path === '/auth/google' ||
    path === '/auth/github'
  )
}
