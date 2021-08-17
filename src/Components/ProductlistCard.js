import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShoppingBag,faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import store from '../Store'
//redux
import { connect } from "react-redux";
import { addItem } from "../Actions/actions";

const ProductlistCard = ({id, image, brand, desc, price, addItemdispatch}) => {
      const state = store.getState();
      const [like, setLike] = useState(false);
      const addtoCart = () => {
      const product = {
        id,
        image,
        brand,
        desc,
        price,
        qty: 1,
      };
      addItemdispatch(product);
     };
    return (
        <div className="overflow-hidden shadow-lg border border-gray-200 bg-white mx-3 my-0 w-256 relative">
          <span className="text-xl ml-1 absolute font-semibold text-pink-600 right-2 top-1">
            <FontAwesomeIcon onClick={() => setLike(!like)} icon={like? faSolidHeart : faHeart }/>
          </span>
        <img className="w-full hover:bg-grey-200" style={{height:"200px"}} src={image} alt={brand}/>
        <div className="p-2 px-3">
          <div className="font-semibold text-lg mb-2 line-clamp-1">{  brand}</div>
          <div className="font-light text-gray-500 text-xs  mb-1 line-clamp-2">{  desc}</div>
          <div className="flex justify-between items-center mb-2">
          <div className="font-bold text-gray-500 text-md">₹ {  price}</div>
          <div className="text-xs">
            {
            state.cartProducts.map(cartProduct => cartProduct.id === id ? `${cartProduct.qty} items in cart`: " ")
            }
          </div>
          </div>
          <button className="font-semibold bg-pink-600 text-white w-full text-sm border border-pink-600 py-1 mb-1 uppercase" onClick={addtoCart}>
              Add to Bag <span className="text-xl ml-1"><FontAwesomeIcon icon={faShoppingBag}/></span>
          </button>
        </div>
      </div>
    )    
    }

const mapStateToProps = (state) => (
  {
  
    products: state.cartProducts,
  }
);

const mapDispatchToProps = (dispatch) => ({
  addItemdispatch: (product) => {
    dispatch(addItem(product));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductlistCard);