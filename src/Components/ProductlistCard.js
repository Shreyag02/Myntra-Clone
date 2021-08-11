import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShoppingBag, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

//redux
import { connect } from "react-redux";
import { addItem } from "../Actions/Inventory";

const ProductlistCard = ({id, image, brand, desc, price, addItem}) => {
  // {console.log("my product",props);}

     const addtoCart = () => {
       const product = {
         id:   id,
         image:   image,
         brand:   brand,
         desc:   desc,
         price:   price
       };
   
       addItem(product);
       console.log("inside cart")
       console.log("my product",product)
      //  console.log("my props",  props)
     };
    return (
        <div className="overflow-hidden shadow-lg border border-gray-200 bg-white mx-3 my-0 w-256">
        <img className="w-full hover:bg-grey-200" style={{height:"225px"}} src={  image} alt={  brand}/>
        <div className="p-2 px-3">
          <div className="font-semibold text-lg mb-2 line-clamp-1">{  brand}</div>
          <div className="font-light text-gray-500 text-xs  mb-2 line-clamp-2">{  desc}</div>
          <div className="font-bold text-gray-500 text-md mb-2 ">Rs.{  price}</div>
          <button className="font-semibold text-pink-600 w-full text-sm border border-pink-600 py-1 mb-1 uppercase">
              Add to wishlist  <span className="text-xl ml-1"><FontAwesomeIcon icon={faHeart}/></span>
          </button>
          <button className="font-semibold bg-pink-600 text-white w-full text-sm border border-pink-600 py-1 mb-1 uppercase" onClick={addtoCart}>
              Add to Bag <span className="text-xl ml-1"><FontAwesomeIcon icon={faShoppingBag}/></span>
          </button>
        </div>
      </div>
  )
    }

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addItem: (product) => {
    dispatch(addItem(product));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductlistCard);