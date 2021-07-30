import React, { Component } from 'react'

export default class DealsCard  extends Component {
  render() {
    return (
    <div className="overflow-hidden shadow-lg text-center">
      <img className="w-full hover:bg-grey-200" style={{height:"200px"}} src={this.props.image} alt={this.props.brand}/>
      <div className="p-4">
        <div className="font-bold text-2xl mb-2 ">{this.props.brand}</div>
        <div className="font-bold text-gray-500 text-3xl mb-2 ">{this.props.disc}</div>
        <div className="font-bold text-gray-500 text-xl mb-2 ">{this.props.item}</div>
        <div className="relative mt-6">
        <div className="absolute bottom-0 text-gray-400 text-xs right-0">*T&C Applied</div>        
        </div>
      </div>
    </div>
    )
  }
}
