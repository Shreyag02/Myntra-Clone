import React, { Component } from 'react'

export default class CategoryCard  extends Component {
  render() {
    return (
    <div class="overflow-hidden shadow-sm text-center p-3 bg-gray-100">
      <img class="w-full hover:bg-grey-200 rounded-full mx-auto" style={{height:"160px", width:"160px"}} src={this.props.image} alt={this.props.name}/>
      <div class="py-2">
        <div class="font-bold text-2xl mb-2 ">{this.props.name}</div>
      </div>
    </div>
    )
  }
}
