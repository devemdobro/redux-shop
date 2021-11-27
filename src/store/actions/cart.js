export function addProductToCart(product) {
    console.log('product', product)
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: product
    }
}
