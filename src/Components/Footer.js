import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFacebookSquare, faTwitter, faYoutube, faInstagram, faAndroid, faApple} from '@fortawesome/free-brands-svg-icons'
import { faAward, faUndo } from '@fortawesome/free-solid-svg-icons'
export default class Footer extends Component {
  render() {
    return (
        <div className="bg-gray-50 p-12  bottom-0">
            <div className="w-full lg:w-10/12 xl:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {/* first section */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="text-sm">
                        <span className="uppercase font-medium">Online shopping</span>
                        <ul className="text-gray-500 my-5">
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Home & Living</li>
                            <li>Beauty</li>
                            <li>Gift Cards</li>
                            <li>Myntra Insider <span className="text-white text-xs rounded-full bg-red-500 px-2 py-0.5">New</span></li>
                        </ul>
                    </div>
                    <div className="text-sm">
                        <span className="uppercase font-medium">Useful Links</span>
                        <ul className="text-gray-500 my-5">
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>T&C</li>
                            <li>Terms Of Use</li>
                            <li>Track Orders</li>
                            <li>Shipping</li>
                            <li>Cancellation</li>
                            <li>Returns</li>
                            <li>Whitehat</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Privacy Policy</li>
                            <li>Site Map</li>
                        </ul>
                    </div>

                </div>

                {/* second section */}
                <div>
                    <div className="text-sm">
                        <span className="uppercase font-medium">EXPERIENCE MYNTRA APP ON MOBILE</span>
                        <div className="block xl:flex items-center xl:space-x-2 my-5 ">

                            <div>
                            <div className="bg-black w-40 mb-1 text-white flex items-center text-2xl space-x-1 px-3 py-0 leading-3 rounded">
                                <FontAwesomeIcon icon={faAndroid}/> 
                                <div>
                                    <span className="text-xs uppercase leading-3">Get it on</span>
                                    <br/>
                                    <span className="text-base font-semibold">Google Play</span>
                                </div>
                            </div>
                            </div>

                            <div>
                            <div className="bg-black w-40 mb-1  text-white flex items-center text-2xl space-x-1 px-3 py-0 leading-3 rounded">
                                <FontAwesomeIcon icon={faApple}/> 
                                <div>
                                    <span className="text-xs leading-3">Download on the</span>
                                    <br/>
                                    <span className="text-base font-semibold">App Store</span>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
                    <div className="text-sm">
                        <span className="uppercase font-medium">KEEP IN TOUCH</span>
                        <div className="flex items-center space-x-6 my-5 text-3xl text-gray-600">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                </div>

                {/* third section */}
                <div className="text-gray-600">
                    <div className="flex items-center space-x-2 mb-5">
                        <div className="text-5xl"><FontAwesomeIcon icon={faAward}/></div> 
                        <div>
                            <span className="font-bold">100% ORIGINAL</span> guarantee<br/>for all products at myntra.com
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-5">
                        <div className="text-4xl"><FontAwesomeIcon icon={faUndo}/></div> 
                        <div>
                            <span className="font-bold">Return within 30days</span> of<br/>receiving your order
                        </div>
                    </div>
                </div>

            </div>
            <hr className="w-full lg:w-11/12 xl:w-10/12 m-auto"/>
            <div className="w-full lg:w-11/12 xl:w-10/12  m-auto block md:flex items-center justify-between font-light ">
                <div>
                In case of any concern, <span className="font-semibold">
                Contact Us</span>
                </div>
                <div className="">
                © 2021 www.myntra.com. All rights reserved.
                </div>
            </div>
        </div>
    )
  }
}
