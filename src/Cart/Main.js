import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
//redux
import { connect } from "react-redux";
import { removeItem} from "../Actions/Inventory";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = ({ products, removeProduct}) => {
  return (
    <>
    <Navbar/>
    <div>
      {
        products.map((product) => (
          <div className="overflow-hidden shadow-lg border border-gray-200 bg-white mx-3 my-0 w-256">
        <img className="w-full hover:bg-grey-200" style={{height:"225px"}} src={product.image} alt={product.brand}/>
        <div className="p-2 px-3">
          <div className="font-semibold text-lg mb-2 line-clamp-1">{product.brand}</div>
          <div className="font-light text-gray-500 text-xs  mb-2 line-clamp-2">{product.desc}</div>
          <div className="font-bold text-gray-500 text-md mb-2 ">Rs.{product.price}</div>
         
          <button className="font-semibold bg-pink-600 text-white w-full text-sm border border-pink-600 py-1 mb-1 uppercase" onClick={() => removeProduct(product.id)}>
              remove <span className="text-xl ml-1"><FontAwesomeIcon icon={faTrash}/></span>
          </button>
        </div>
      </div>
        ))
      }
    </div>
    <Footer/>
    </>
  )
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (id) => {
    dispatch(removeItem(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);