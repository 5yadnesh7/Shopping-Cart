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
    let tmpState = { ...state }
    tmpState.total = tmpState.total + action.payload.price;
    tmpState.products.push(action.payload);
    return tmpState;
}