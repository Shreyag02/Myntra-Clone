import React, { Component } from 'react'

export default class NavElement extends Component {
  render() {
    return (
        <a
        href="#"
        className="hover:text-gray-700 hover:border-pink-500 border-b-4 text-gray-400 border-transparent block px-3 py-2 text-lg font-medium"
      >
        {this.props.title}
      </a>
    )
  }
}
