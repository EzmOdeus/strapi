import axiosClient from "./axios";

const getallProduct = () => axiosClient.get('/products?populate=*')
const getallCart = () => axiosClient.get('/carts?populate=*')
const getallVid = () => axiosClient.get('/vids?populate=*')
const getLatestProduct = () => axiosClient.get('/products?pagination[pageSize]=8&populate=*')
const getproductById=(id:any)=> axiosClient.get(`/products/${id}?populate=*`)
const getproductBycategory=(category:any)=> axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)
export default {
    getLatestProduct,
    getproductById,
    getproductBycategory,
    getallProduct,
    getallCart,
    getallVid
}