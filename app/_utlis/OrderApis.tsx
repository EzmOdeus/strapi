import axiosClient from "./axios";

const createOrder = (data: any) => axiosClient.post('/orders', data)
export default {
    createOrder
}