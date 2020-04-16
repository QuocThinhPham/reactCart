import React from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartTotal from './../components/CartTotal';
import PropTypes from 'prop-types';
import * as Message from './../constants/Message';
import * as actions from './../actions/index';

class CartContainer extends React.Component {
  render() {
  	var { cart } = this.props;
    return (
      <Cart>
      	{ this.showCart(cart) }
      	{ this.showCartTotal(cart) }
      </Cart>
    );
  }

  showCart = (cart) => {
    var result = <tr><td>{ Message.MSG_CART_EMPTY }</td></tr>;
    var { onDeleteInCart, onChangeMessage, onUpdateProductInCart } = this.props;
    if(cart.length > 0) {
      result = cart.map((cartItem, index) => {
        return  <CartItem
                  key={ index }
                  cartItem={ cartItem }
                  onDeleteInCart={ onDeleteInCart }
                  onChangeMessage={ onChangeMessage }
                  onUpdateProductInCart={ onUpdateProductInCart }
                />
      });
    }
    return result;
  }

  showCartTotal = (cart) => {
  	var result = null;
  	if(cart.length > 0) {
  		result = <CartTotal cart={ cart } />
  	}
  	return result;
  }
}

CartContainer.propTypes = {
  cart : PropTypes.arrayOf(
  	PropTypes.shape({
  		product : PropTypes.shape({
  			id : PropTypes.number.isRequired,
	      name : PropTypes.string.isRequired,
	      image : PropTypes.string.isRequired,
	      description : PropTypes.string.isRequired,
	      price : PropTypes.number.isRequired,
	      rating : PropTypes.number.isRequired,
	      inventory : PropTypes.number.isRequired
  		}).isRequired,
    	quantity : PropTypes.number.isRequired
  	})
  ).isRequired
};

const mapStateToProps = state => {
	return {
		cart : state.cart
	}
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateProductInCart : (product, quantity) => {
      dispatch(actions.actUpdateProductInCart(product, quantity));
    },
    onDeleteInCart : (product) => {
      dispatch(actions.actRemoveProductInCart(product));
    },
    onChangeMessage : (message) => {
      dispatch(actions.actChangeMsg(message));
    }    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
