import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
//redux
import { connect } from "react-redux";
import { removeItem} from "../Actions/Inventory";
import { faChevronRight, faTag} from '@fortawesome/free-solid-svg-icons';
import {faHeart}from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = ({ products, removeProduct}) => {

  console.log("products from cart", products)
  return (
    <>
    <Navbar/>
    <div className="w-11/12 m-auto grid grid-cols-4 my-6" style={{minHeight:"60vh"}}>
    <div className="col-span-3">
    <div className="border border-gray-200 rounded p-3 flex justify-between items-center">
      <div>
      Deliver to:
      <span className="font-bold uppercase ml-1">shreya gupta</span><br/>
      M.I.G. 52, Awas Vikas-1st<br/>
      D.M. Road<br/>
      Bulandshahr, Uttar Pradesh, India- 203001
      </div>

      <div>
        <button className="border border-pink-600 rounded text-pink-600 font-semibold p-2.5 text-xs uppercase">Change Address</button>
      </div>
    </div>
    <div className="mt-4"> 
    <div className="flex justify-between items-center font-bold my-4">
    <div>My Shopping Bag ({products.length} items)</div>
    <div>Total:₹100</div>
    </div>
    {products.length ? <div className="grid">

        {products.map(product => (
        <div key={product.id} className="rounded p-3 overflow-hidden grid grid-cols-5 border border-gray-200 bg-white mb-3 mx-0">
        <>
        <div className=""><img className="w-full hover:bg-grey-200" style={{height:"150px"}} src={product.image} alt={product.brand}/></div>
        <div className="col-span-4 grid grid-cols-4">
          <div className="col-span-3">
          <div className="font-semibold text-lg mb-2 line-clamp-1">{product.brand}</div>
          <div className="font-light text-gray-500 text-xs  mb-3 line-clamp-1">{product.desc}</div>
          Qty:  
          <span className="ml-3 input-group">
            <button className="button-minus outline-none border border-gray-200 text-center w-8">-</button>
            <input type="" step="1" max="" min="1" value={product.qty} name="quantity" className="outline-none border-t border-b border-gray-200 w-12 text-center"/>
            <button className="button-plus outline-none border border-gray-200 w-8 text-center">+</button>
          </span>
          </div>
          <div className="font-bold text-md text-right">₹{product.price}</div>
        </div>
        </>
        <>
        <div className="text-center text-gray-500 text-gray-500 border-t border-r border-gray-200 pt-3">
          <button className="font-semibold uppercase" onClick={() => removeProduct(product.id)}>
              remove
          </button>
        </div>
        <div className="col-span-4 text-gray-500 border-t border-gray-200 pt-3">
          <button className="font-semibold uppercase ml-24">
              move to wishlist
          </button>
        </div>
        </>

      </div>
        ))}
      
    </div> : <div className="border border-gray-200 p-4">no items in cart</div>
      
    }
    </div>
    <div className="border border-gray-200 rounded p-3 flex justify-between items-center">
      <div className="capitalize"><FontAwesomeIcon icon={faHeart}/> Add more from wishlist</div>

      <div>
        <button className="font-semibold "><FontAwesomeIcon icon={faChevronRight}/></button>
      </div>
    </div>
    
    </div>
    <div className="px-3">
    <div className="border border-gray-200 rounded p-3 ">
      <span className="uppercase text-gray-500 font-bold text-sm">Coupons:</span>
      <div className="flex justify-between items-center my-4">
      <div className="font-semibold "><FontAwesomeIcon icon={faTag}/> Apply Coupons</div>
      <div>
        <button className="border border-pink-600 rounded text-pink-600 font-semibold p-2 py-1 text-xs uppercase">apply</button>
      </div>
      </div>
      <hr/>
      <div className="uppercase text-gray-500 font-bold text-sm mt-4">Price details ({products.length} items):</div>
      <div className="flex justify-between items-center my-4">
      <div className="font-semibold ">total MRP:</div>
      <div>
        <button className="">₹100</button>
      </div>
      </div>


    </div>
    <button className="font-semibold bg-pink-600 text-white w-full text-sm border border-pink-600 py-1 mb-1 uppercase my-3" >
        place order
    </button>
    </div>
    </div>
    <Footer/>
    </>
  )
};

const mapStateToProps = (state) => ({
  
  products: state.cartProducts,
});

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (id) => {
    dispatch(removeItem(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);