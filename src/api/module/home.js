import server from '../server'

export const homeApi = {
  getCows: async() => {
  const data = await server.get('/cows')
  return data
},
  getMilks: async() => {
  const data = await server.get('/milks')
  return data
}
}