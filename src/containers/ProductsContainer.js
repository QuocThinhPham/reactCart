import React from 'react';
import { connect } from 'react-redux';
import ProductList from './../components/ProductList';
import ProductItem from './../components/ProductItem';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';

class ProductsContainer extends React.Component {
  render() {
    var { products } = this.props;
    return (
      <ProductList>
        { this.showProductList(products) }
      </ProductList>
    );
  }

  showProductList = (products) => {
    var result = null;
    var { onAddToCart, onChangeMessage } = this.props;
    if(products.length > 0) {
      result = products.map((product, index) => {
        return  <ProductItem
                  key={ product.id }
                  product={ product }
                  onAddToCart={ onAddToCart }
                  onChangeMessage={ onChangeMessage }
                />
      });
    }
    return result
  }
}

ProductsContainer.propTypes = {
  products : PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number.isRequired,
      name : PropTypes.string.isRequired,
      image : PropTypes.string.isRequired,
      description : PropTypes.string.isRequired,
      price : PropTypes.number.isRequired,
      rating : PropTypes.number.isRequired,
      inventory : PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage : PropTypes.func.isRequired
};

const mapStateToProps  = state => {
  return {
    products : state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart : (product) => {
      dispatch(actions.addToCart(product, 1));
    },
    onChangeMessage : (message) => {
      dispatch(actions.actChangeMsg(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
