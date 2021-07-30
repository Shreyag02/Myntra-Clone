import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFacebookSquare, faTwitter, faYoutube, faInstagram, faAndroid, faApple} from '@fortawesome/free-brands-svg-icons'
export default class Footer extends Component {
  render() {
    return (
        <div className="bg-gray-50 p-12">
            <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                <div>
                    <div className="text-sm">
                        <span className="uppercase font-medium">EXPERIENCE MYNTRA APP ON MOBILE</span>
                        <div className="lex items-center space-x-6 my-5">
                            <button>
                                <FontAwesomeIcon icon={faAndroid}/> Playstore
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faApple}/> App Store
                            </button>
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

                <div>
                </div>
            </div>
            <hr className="w-10/12 m-auto"/>
        </div>
    )
  }
}
