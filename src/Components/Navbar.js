import React, { Component } from 'react'
import logo from '../Assets/myntra-logo.svg'
import NavElement from './NavElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faUser} from '@fortawesome/free-regular-svg-icons'
import {faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
  render() {
    return (
        <nav className="sticky top-0 bg-white z-10 shadow-none">
        <div className="mx-auto px-4 md:px-6 lg:px-8 xl:px-12 mynav">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
                  src={logo}
                  alt="Myntra"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-4 xl:ml-10 flex items-baseline space-x-2 xl:space-x-4">
                  <NavElement title="Men"/>
                  <NavElement title="Women"/>
                  <NavElement title="Kids"/>
                  <NavElement title="Home & Living"/>
                  <NavElement title="Beauty"/>
                </div>
              </div>
            </div>
            <div className="flex items-right">
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative hidden lg:block">
              <div className="absolute left-2 top-2 xl:left-4 font-weight-light text-gray-400"> 
              <FontAwesomeIcon icon={faSearch}/>
              </div>
              <input type="text" className="bg-gray-100 focus:bg-white h-10 border rounded w-64 xl:w-96 px-8 xl:px-12 py-4 z-0 focus:outline-none focus:border-red" placeholder="Search for products,brands and more..."/>
              </div>

              <div className="text-center font-medium lg:hidden">
              <FontAwesomeIcon icon={faSearch} />
              <p className="text-xs font-bold">Search</p>
              </div>
              <div className="text-center font-medium">
              <FontAwesomeIcon icon={faUser} />
              <p className="text-xs font-bold">Profile</p>
              </div>

              <div className="text-center font-medium">
              <FontAwesomeIcon icon={faHeart} />
              <p className="text-xs font-bold">Wishlist</p>
              </div>

              <div className="text-center font-medium">
              <FontAwesomeIcon icon={faShoppingBag} />
              <p className="text-xs font-bold">Bag</p>
              </div>

            </div>

            <div className="md:hidden flex items-center space-x-6">
              <FontAwesomeIcon icon={faSearch} />
              <FontAwesomeIcon icon={faUser} />
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faShoppingBag} />
            </div>
            
            </div>

            
          </div>
        </div>

        {/* <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavElement title="Men"/>
            <NavElement title="Women"/>
            <NavElement title="Kids"/>
            <NavElement title="Home & Living"/>
            <NavElement title="Beauty"/>
          </div>
        </div> */}
      </nav>
    )
  }
}
export default Navbar;
