export const setToCart = (product) =>{
  localStorage.setItem('Niu-cart', JSON.stringify (product))
}

export const getCart = () => {
  return JSON.parse(localStorage.getItem('Niu-cart')) || []
}

export const setToken =  (token) =>{
  localStorage.setItem('Niu-Token',token)
}

export const getToken = () =>{
  return localStorage.getItem('Niu-Token') || ''
}

export const setLang = (lang) =>{
  localStorage.setItem('Niu-Token', lang )
}

export const getLang = () =>{
  return localStorage.getItem('Niu-Token') || ''
}
