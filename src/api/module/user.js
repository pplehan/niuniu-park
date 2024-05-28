import sever from '../sever'

export const userApi = {
  login: async() =>{
    const data = await sever.post('/login')
    console.log(data);
  }
}