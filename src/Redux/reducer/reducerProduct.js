const initialstate = {
    total: 0,
    products: []
};
const productChange = (state = initialstate, action) => {
    switch (action.type) {
        case 'AddProduct': return addProductToStore(state, action);
        default: return state;
    }
}

export default productChange;

const addProductToStore = (state, action) => {
    state.total = state.total + action.payload.price;
    state.products.push(action.payload);
    return state;
}