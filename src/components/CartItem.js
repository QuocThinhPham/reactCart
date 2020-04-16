import React from 'react';
import * as Message from './../constants/Message';

class CartItem extends React.Component {

  render() {
    var { cartItem } = this.props;
    var { quantity } = cartItem;
    return (
      <tr>
        <th scope="row">
          <img src={ cartItem.product.image } alt={ cartItem.product.name } className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{ cartItem.product.name }</strong>
          </h5>
        </td>
        <td>{ cartItem.product.price }$</td>
        <td className="center-on-small-only">
          <span className="qty">{ quantity }&nbsp;&nbsp;</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={ () => this.onUpdateQuantity(cartItem.product, cartItem.quantity - 1) }
            >
              <button>—</button>
            </label>
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={ () => this.onUpdateQuantity(cartItem.product, cartItem.quantity + 1) }
            >
              <button>+</button>
            </label>
          </div>
        </td>
        <td>{ this.showPriceTotal(cartItem.product.price, cartItem.quantity) }$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="Remove item"
            onClick={ () => this.onDeleteInCart(cartItem.product) }
          >
            X
          </button>
        </td>
      </tr>
    );
  }

  showPriceTotal = (price, quantity) => {
    return price * quantity;
  }

  onDeleteInCart = (product) => {
    this.props.onDeleteInCart(product);
    this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT);
  }

  onUpdateQuantity = (product, quantity) => {
    if(quantity > 0) {
      var { onUpdateProductInCart, onChangeMessage } = this.props;
      onUpdateProductInCart(product, quantity);
      onChangeMessage(Message.MSG_UPDATE_CART);
    }    
  }

}

export default CartItem;
