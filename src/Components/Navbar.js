import React, { Component } from 'react'
import logo from '../Assets/myntra-logo.svg'
import NavElement from './NavElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faUser} from '@fortawesome/free-regular-svg-icons'
import {faShoppingBag } from '@fortawesome/free-solid-svg-icons'
class Navbar extends Component {
  render() {
    return (
        <nav className="">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 mynav">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-14 w-14"
                  src={logo}
                  alt="Myntra"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavElement title="Men"/>
                  <NavElement title="Women"/>
                  <NavElement title="Kids"/>
                  <NavElement title="Home & Living"/>
                  <NavElement title="Beauty"/>
                </div>
              </div>
            </div>
            <div className="flex items-right">
            <div className="ml-10 flex items-baseline space-x-4">
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faShoppingBag} />
            </div>
            
            </div>

            {/* <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavElement title="Men"/>
                  <NavElement title="Women"/>
                  <NavElement title="Kids"/>
                  <NavElement title="Home & Living"/>
                  <NavElement title="Beauty"/>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar;
