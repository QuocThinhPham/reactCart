import React from 'react';
import * as Message from './../constants/Message';

class ProductItem extends React.Component {
  render() {

    var { product } = this.props;

    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img
              src={ product.image }
              className="img-fluid"
              alt={ product.name }
            />
            
              <div className="mask waves-light waves-effect waves-light" />
            
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                { product.name }
              </strong>
            </h4>
            <ul className="rating">
              <li>
                { this.showRatings(product.rating) }
              </li>
            </ul>
            <p className="card-text">
              { product.description }
            </p>
            <div className="card-footer">
              <span className="left">{ product.price }$</span>
              <span className="right">
                <button
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Add to Cart"
                  onClick={ () => this.onAddToCart(product) }
                >
                  <i className="fa fa-shopping-cart" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  showRatings(rating) {
    var result = [];
    for(let i = 0; i < rating; i++) {
      result.push(<i key={i} className="fa fa-star" />)
    }
    for(let i = 0; i < 5 - rating; i++) {
      result.push(<i key={i + rating} className="fa fa-star-o" />)
    } 
    return result;
  }

  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_CART_SUCCESS);
  }
}

export default ProductItem;
