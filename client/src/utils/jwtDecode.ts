import jwtDecode from 'jwt-decode'

export default async(token: string): Promise<unknown> => {
  return await new Promise((resolve) => {
    const decoded = jwtDecode(token)
    resolve(decoded)
  })
}
