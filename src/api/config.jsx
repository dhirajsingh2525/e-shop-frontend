import axios from "axios";
const instance = axios.create({
   // axios instance to set default configurations
        // baseURL is the root URL for all requests made using this instance

        baseURL: "https://e-shop-backend-seao.onrender.com",

        // add base url
})
export default instance