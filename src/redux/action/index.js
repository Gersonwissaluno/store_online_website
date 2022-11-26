// for Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDCART",
        payload: product
    }
}

// for Delete Item to Cart
export const delCart = (product) => {
    return {
        type: "DELCART",
        payload: product
    }
}