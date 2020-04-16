import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data ? data : [];

const cart = (state = initialState, action) => {
	var index = -1;
	switch(action.type) {
		case types.ADD_TO_CART:
			index = findProductInCart(state, action.product);
			if(index !== -1) {
				state[index].quantity += action.quantity;
			} else {
				state.push({
					product : action.product,
					quantity : action.quantity
				});
			}
			localStorage.setItem('CART', JSON.stringify(state));
			return [...state];

		case types.DELETE_PRODUCT_IN_CART:
			index = findProductInCart(state, action.product);
			if(index !== -1) {
				state.splice(index, 1);
			}
			localStorage.setItem('CART', JSON.stringify(state));
			return [...state];

		case types.UPDATE_PRODUCT_IN_CART:
			index = findProductInCart(state, action.product);
			if(index !== -1) {
				state[index].quantity = action.quantity;
			}
			localStorage.setItem('CART', JSON.stringify(state));
			return [...state];

		default:
			return [...state];
	}
}

var findProductInCart = (cart, product) => {
	var index = -1;
	if(cart.length > 0)
		for (var i = 0; i < cart.length; i++)
			if(cart[i].product.id === product.id) {
				index = i;
				break;
			}
	return index;
}

export default cart