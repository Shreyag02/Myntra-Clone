import React, { Component } from 'react'

export default class DealsCard  extends Component {
  render() {
    return (
    <div class="overflow-hidden shadow-lg text-center">
      <img class="w-full hover:bg-grey-200" style={{height:"200px"}} src={this.props.image} alt={this.props.brand}/>
      <div class="p-4">
        <div class="font-bold text-2xl mb-2 ">{this.props.brand}</div>
        <div class="font-bold text-gray-500 text-3xl mb-2 ">{this.props.disc}</div>
        <div class="font-bold text-gray-500 text-xl mb-2 ">{this.props.item}</div>
        <div className="relative mt-6">
        <div class="absolute bottom-0 text-gray-400 text-xs right-0">*T&C Applied</div>        
        </div>
      </div>
    </div>
    )
  }
}
