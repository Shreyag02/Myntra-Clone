import React, { Component } from 'react'

export default class ProductCard  extends Component {
  render() {
    return (
    <div class="overflow-hidden shadow-lg text-center p-6 bigbrand">
      <img class="w-full hover:bg-grey-200 rounded" style={{height:"300px"}} src={this.props.image} alt={this.props.brand}/>
      <div class="py-4">
        <div class="font-bold text-2xl mb-2 ">{this.props.brand}</div>
        <div class="font-bold text-gray-500 text-3xl mb-2 ">{this.props.disc}</div>
        
      </div>
    </div>
    )
  }
}
