import React, { Component } from 'react'

export default class CategoryCard  extends Component {
  render() {
    return (
    <div className="overflow-hidden shadow-sm text-center p-3 bg-gray-100">
      <img className="w-full hover:bg-grey-200 rounded-full mx-auto" style={{height:"160px", width:"160px"}} src={this.props.image} alt={this.props.name}/>
      <div className="py-2">
        <div className="font-bold text-2xl mb-2 ">{this.props.name}</div>
      </div>
    </div>
    )
  }
}
