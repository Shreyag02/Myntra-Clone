import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

export default class ProductlistCard extends Component {
  render() {
    return (
        <div className="overflow-hidden shadow-lg border border-gray-200 bg-white mx-3 my-0 w-256">
        <img className="w-full hover:bg-grey-200" style={{height:"225px"}} src={this.props.image} alt={this.props.brand}/>
        <div className="p-2 px-3">
          <div className="font-semibold text-lg mb-2 line-clamp-1">{this.props.brand}</div>
          <div className="font-light text-gray-500 text-xs  mb-2 line-clamp-2">{this.props.desc}</div>
          <div className="font-bold text-gray-500 text-md mb-2 ">Rs.{this.props.price}</div>
          <button className="font-semibold text-pink-600 w-full text-sm border border-pink-600 py-1 mb-1 uppercase">
              Add to wishlist  <span className="text-xl ml-1"><FontAwesomeIcon icon={faHeart}/></span>
          </button>
          <button className="font-semibold bg-pink-600 text-white w-full text-sm border border-pink-600 py-1 mb-1 uppercase">
              Add to Bag <span className="text-xl ml-1"><FontAwesomeIcon icon={faShoppingBag}/></span>
          </button>
        </div>
      </div>
    )
  }
}

// import React from 'react'

// export default function ProductlistCard(props) {
//   return (
//     <div className="overflow-hidden shadow-lg border border-gray-200 bg-white mx-3 my-0 w-256">
//         <img className="w-full hover:bg-grey-200" style={{height:"225px"}} src={props.image} alt={props.brand}/>
//         <div className="p-2 px-3">
//           <div className="font-semibold text-lg mb-2 line-clamp-1">{props.brand}</div>
//           <div className="font-light text-gray-500 text-xs  mb-2 line-clamp-2">{props.desc}</div>
//           <div className="font-bold text-gray-500 text-md mb-2 ">Rs.{props.price}</div>
//           <button className="font-semibold text-pink-600 w-full text-sm border border-pink-600 py-1 mb-1 uppercase">
//               Add to wishlist  <span className="text-xl ml-1"><FontAwesomeIcon icon={faHeart}/></span>
//           </button>
//           <button className="font-semibold bg-pink-600 text-white w-full text-sm border border-pink-600 py-1 mb-1 uppercase">
//               Add to Bag <span className="text-xl ml-1"><FontAwesomeIcon icon={faShoppingBag}/></span>
//           </button>
//         </div>
//       </div>
//   )
// }
