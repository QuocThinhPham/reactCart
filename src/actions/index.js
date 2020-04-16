import * as types from './../constants/ActionTypes';

export const addToCart = (product, quantity) => {
	return {
		type : types.ADD_TO_CART,
		product,
		quantity
	}
};

export const actUpdateProductInCart = (product, quantity) => {
	return {
		type : types.UPDATE_PRODUCT_IN_CART,
		product,
		quantity
	}
}

export const actRemoveProductInCart = product => {
	return {
		type : types.DELETE_PRODUCT_IN_CART,
		product
	}
};

export const actChangeMsg = message => {
	return {
		type : types.CHANGE_MSG,
		message
	}
};