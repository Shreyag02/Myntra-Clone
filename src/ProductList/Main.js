import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import ProductlistCard from '../Components/ProductlistCard'
import Axios from "axios";
import {FixedSizeGrid, FixedSizeList} from 'react-window'
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
    return (
      <>
        <Navbar/>
        <div className="bg-green-200" style={{height:"200px"}}></div>
        
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
        columnCount={1} 
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
