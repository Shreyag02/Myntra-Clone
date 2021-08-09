import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import ProductlistCard from '../Components/ProductlistCard'
import Axios from "axios";
import {FixedSizeGrid} from 'react-window'
import { Link } from 'react-router-dom';
export default class ProductList extends Component {
    state = {
        mydata:[],
    };
    componentDidMount(){
        Axios.get(`https://api.jsonbin.io/b/610ba3f2e1b0604017a6fbcc`)
        .then(
            res => {
                this.setState({mydata : res.data});
            }
        )
        .catch(
            err => console.log(err)
        )
    }
    
    render() {
        const myprod = ({rowIndex,columnIndex,style}) => {
        const product = this.state.mydata[rowIndex+columnIndex] || {}
            return(
            <div style={style}>
            <ProductlistCard key={product["SERIAL NO"]} image={product.IMAGE} brand={product.NAME} desc={product["DESCRIPTION & COLOR"]} price={product.PRICE}/>
            </div>
            )
        };

      console.log(this.state.mydata)
      var count = 5;
       
      if (window.innerWidth <= 768) {
          count = 2;
      }
      if (window.innerWidth <= 425) {
        count = 1;
    }
    return (
      <>
        <Navbar/>
        <div className=" border-b border-gray-300 ">
            <div className="container mt-16 text-sm">
            <ol className="list-reset pt-6 pb-1 pl-4 rounded flex ">
                <li className="px-2"><Link to="/" className="no-underline text-indigo">Home</Link></li>
                <li>/</li>
                <li className="px-2"><a href="#" className="no-underline text-indigo">Men</a></li>
                <li>/</li>
                <li className="px-2 font-bold">Accessories</li>
            </ol>
            </div>

            <div className="pl-6 text-sm font-bold">
                Accessories for Men <span className="font-light">- {this.state.mydata.length} items</span>
            </div>

            <div className="px-6 my-4 text-sm font-bold flex justify-between items-center">
                <span>FILTERS</span>
            <div className="relative hidden lg:block">
              <div className="absolute left-2 top-2 xl:left-4 font-weight-light text-gray-400"> 
              SORTBY
              </div>
              <input type="text" className="bg-gray-100 focus:bg-white h-10 border w-64 xl:w-96 px-8 xl:px-12 py-4 z-0 focus:outline-none " placeholder=""/>
              </div>
            </div>
        </div>
        
        <div className="grid grid-cols-4">
            {/* filter section */}
        <div className="bg-blue-200 border">
            fliter
        </div>


        {/* productlist */}
        <div className="col-span-3 flex justify-center py-4 border-l border-t`">
        {/* <div className="grid grid-cols-5 p-2" style={{border:"1px solid red"}}>

        {this.state.mydata.map(product => (
            <ProductlistCard key={product["SERIAL NO"]} image={product.IMAGE} brand={product.NAME} desc={product["DESCRIPTION & COLOR"]} price={product.PRICE} />
        ))}
            </div> */}
        
        <FixedSizeGrid 
        columnCount={count} 
        rowCount={this.state.mydata.length/5} 
        height={1000} 
        width={1300} 
        rowHeight={500} 
        columnWidth={260}>
            {myprod}
        </FixedSizeGrid>

        </div>

        </div>
        <Footer/>
      </>
    )
  }
}
