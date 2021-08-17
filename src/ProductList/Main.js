import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import ProductlistCard from '../Components/ProductlistCard'
import Axios from "axios";
import {FixedSizeGrid} from 'react-window'
import { Link } from 'react-router-dom';
import Filter from './Filter';
import ecomdata from "../Data/ecomdata.json"
export default class ProductList extends Component {
    state = {
        mydata:[],
    };
    componentDidMount(){
        // var config = {
        //     headers: {'Access-Control-Allow-Origin': '*'}
        // };
        // Axios.get(`https://cors-anywhere.herokuapp.com/https://api.jsonbin.io/b/610ba3f2e1b0604017a6fbcc`,config)
        // Axios.get(`https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos`)
        // https://cors-anywhere.herokuapp.com/corsdemo
        // Axios.get(`https://jsonkeeper.com/b/S5P8`)
        Axios.get(`https://api.jsonbin.io/b/610ba3f2e1b0604017a6fbcc`)
        .then(
            res => {
                this.setState({mydata : res.data});
                console.log(res.data)
            }
        )
        .catch(
            err => console.log(err)
        )
    }
    
    render() {
        const myprod = ({rowIndex,columnIndex,style}) => {
        // const product = this.state.mydata[rowIndex+columnIndex] || {}
        // ecomdata.sort((a,b) => (a.PRICE > b.PRICE) ? 1 : ((b.PRICE > a.PRICE) ? -1 : 0))
        const product = ecomdata[(rowIndex*count)+columnIndex] || {}
            return(
            <div style={style}>
            <ProductlistCard key={product["SERIAL NO"]} id={product["PRODUCT ID"]}  image={product.IMAGE} brand={product.NAME} desc={product["DESCRIPTION & COLOR"]} price={product.PRICE}/>
            </div>
            )
        };

    //   console.log(this.state.mydata)
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
        <div className="w-11/12 m-auto">

        <div className=" border-b border-gray-300 ">
            <div className="container text-sm">
            <ol className="list-reset pt-6 pb-1 pl-4 rounded flex ">
                <li className="px-2"><Link to="/" className="no-underline text-indigo">Home</Link></li>
                <li>/</li>
                <li className="px-2"><a href="#" className="no-underline text-indigo">Men</a></li>
                <li>/</li>
                <li className="px-2 font-bold">Accessories</li>
            </ol>
            </div>

            <div className="pl-6 text-sm font-bold">
                Accessories for Men <span className="font-light">- {ecomdata.length} items</span>
            </div>

            <div className="px-6 my-4 text-sm font-bold flex justify-between items-center">
                <span>FILTERS</span>
            <div className="relative hidden lg:block">
              
              {/* <input type="text" className="bg-gray-100 focus:bg-white h-10 border w-64 xl:w-96 px-8 xl:px-12 py-4 z-0 focus:outline-none " placeholder=""/> */}
            <div className="dropdown inline-block relative">
                <div className="border font-semibold py-2 px-4 border-gray-500 inline-flex items-center">
                <div className="xl:left-4 font-light text-gray-400"> 
                SORTBY: 
                </div>
                <select name="sort" id="sort" className="bg-transparent font-light mt-0 ml-2 outline-none focus-visible:outline-none">
                    <option value="Best Selling">Best Selling</option>
                    <option value="Price low to high">Price low to high</option>
                    <option value="Price high to low">Price high to low</option>
                </select>
                
                </div>
                
            </div>
              </div>
            </div>
        </div>
        {/* head section ends */}


        <div className="grid grid-cols-5">
            {/* filter section */}
        <div className="border-r border-gray-300">
            <Filter/>
        </div>


        {/* productlist */}
        <div className="col-span-4 flex justify-center py-4 border-l border-t`">
        {/* <div className="grid grid-cols-5 p-2" style={{border:"1px solid red"}}>

        {this.state.mydata.map(product => (
            <ProductlistCard key={product["SERIAL NO"]} image={product.IMAGE} brand={product.NAME} desc={product["DESCRIPTION & COLOR"]} price={product.PRICE} />
        ))}
            </div> */}
        
        <FixedSizeGrid 
        columnCount={count} 
        // rowCount={this.state.mydata.length} 
        rowCount={ecomdata.length/count}
        height={1000} 
        width={1300} 
        rowHeight={400} 
        columnWidth={255}>
            {myprod}
        </FixedSizeGrid>

        </div>

        </div>
        
        </div>
        <Footer/>
      </>
    )
  }
}
//objs.sort((a,b) => (a.PRICE > b.PRICE) ? 1 : ((b.PRICE > a.PRICE) ? -1 : 0))

// {
//     if (window.innerWidth <= 1440) {
//         this.setState({count:4})
//         // count = 4;
//     }
//     if (window.innerWidth <= 1024) {
//         this.setState({count:4})

//         // count = 3;
//     }
//       if (window.innerWidth <= 768) {
//         this.setState({count:4})

//         //   count = 2;
//       }
//       if (window.innerWidth <= 425) {
//         this.setState({count:4})

//         // count = 1;
//     }
//   }