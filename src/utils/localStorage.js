export const setToCart = (product) =>{
  localStorage.setItem('Niu-cart', JSON.stringify (product))
}

export const getCart = () => {
  return JSON.parse(localStorage.getItem('Niu-cart'))
}
