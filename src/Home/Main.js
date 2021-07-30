import React, { Component } from 'react'
import Carousel from '../Components/Carousel';
import CategoryCard from '../Components/CategoryCard';
import DealsCard from '../Components/DealsCard';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import ProductCard from '../Components/ProductCard';
import bigbrands from '../Data/bigbrands.json'
import categories from '../Data/categories.json'
import deals from '../Data/deals.json'
export default class Main extends Component {
  render() {
    return (
        <>
        <Navbar/>
        <img className="my-8" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/19/58042f82-37ce-45e0-931f-b9dd96baa50b1626680464655-DK_Banner--2-.jpg" alt="banner" />
        <Carousel/>

        {/* deals of the day section */}
        <div className="w-10/12 mx-auto ">
        <h1 className="font-bold text-gray-700 text-4xl my-4" >DEALS OF THE DAY</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-10/12 mt-6 mb-20 mx-auto">
        {deals.map(product => (
            <DealsCard key={product.id} brand={product.brand} image={product.image} disc={product.disc} item={product.item}/>
        ))}
        </div>

        {/* topbrands section */}
        <div className="w-10/12 mx-auto ">
        <h1 className="font-bold text-gray-700 text-4xl my-4" >BIGGEST DEALS ON TOP BRANDS</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-4 w-10/12 mt-6 mb-20 mx-auto">
        {bigbrands.map(product => (
            <ProductCard key={product.id} brand={product.brand} image={product.image} disc={product.disc}/>
        ))}
        </div>

        {/* Categories section */}
        <div className="w-10/12 mx-auto ">
        <h1 className="font-bold text-gray-700 text-4xl my-4" >CATEGORIES TO BAG</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-4 w-10/12 mt-6 mb-20 mx-auto ">
        {categories.map(category => (
            <CategoryCard key={category.id} name={category.name} image={category.image}/>
        ))}
        </div>


        <Footer/>
        </>
    )
  }
}
