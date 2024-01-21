import axiosClient from './axios';
const addToCart = (payload: any) => axiosClient.post('/carts', payload) 
const deletitem=(id:any)=>axiosClient.delete(`/carts/${id}`)
const getCartItem = (email:any) => axiosClient.get(`carts?populate[products][populate]=img&filters[email][$eq]=${email}`)
export default {
    addToCart,
    getCartItem,
    deletitem
}