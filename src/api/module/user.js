import server from '../server'

export const userApi = {
  login: async(verifyCode) =>{
    const data = await server.post('/login', { verifyCode })
    return data.data
  }
}