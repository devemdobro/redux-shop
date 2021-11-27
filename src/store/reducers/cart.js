export default function reducer(state = [], action) { 
    console.log('ADD_PRODUCT_TO_CART reducer')

    switch(action.type) {
        case "ADD_PRODUCT_TO_CART":
            return [...state, action.payload]
        default: 
            return state
    }
}