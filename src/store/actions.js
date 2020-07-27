import axios from "axios";
export const getProducts = ({
    commit
}) => {
    axios.get('http://shayna-backend.belajarkoding.com/api/products')
        .then(response => {
            commit('SET_PRODUCTS', response.data.data.data)
        })
}
export const getProduct = ({
    commit
}, productId) => {
    axios.get(`http://shayna-backend.belajarkoding.com/api/products/${productId}`)
        .then(response => {
            commit('SET_PRODUCTS', response.data.data.data)
        })
}