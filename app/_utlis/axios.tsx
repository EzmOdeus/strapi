const {default: axios} = require('axios')
const apikey = process.env.NEXT_PUBLIC_API_KEY
const apiurl = 'https://strapi-9jcs.onrender.com//api'
const axiosClient = axios.create({
    baseURL: apiurl,
    headers: {
       Authorization:`Bearer ${apikey}` 
    }
})

export default axiosClient