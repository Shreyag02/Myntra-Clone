import React, { Component } from 'react'

export default class ProductCard  extends Component {
  render() {
    return (
    <div className="overflow-hidden shadow-lg text-center p-6 bigbrand">
      <img className="w-full hover:bg-grey-200 rounded" style={{height:"300px"}} src={this.props.image} alt={this.props.brand}/>
      <div className="py-4">
        <div className="font-bold text-2xl mb-2 ">{this.props.brand}</div>
        <div className="font-bold text-gray-500 text-3xl mb-2 ">{this.props.disc}</div>
        
      </div>
    </div>
    )
  }
}
