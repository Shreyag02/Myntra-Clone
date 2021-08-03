import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

export default class ProductList extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <div className="bg-green-200" style={{height:"200px"}}></div>
        <div className="grid bg-blue-200 grid-cols-4"style={{height:"1000px"}}>
            {/* filter section */}
        <div></div>
        {/* productlist */}
        <div className="bg-red-200 col-span-3"></div>
        </div>
        <Footer/>
      </>
    )
  }
}
