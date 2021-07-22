import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div className="bg-gray-50">
            <div className="w-8/12 mx-auto grid grid-cols-3 gap-3">
                <div className="grid grid-cols-2 gap-3">
                    <div>Online shopping</div>
                    <div>Useful links</div>

                </div>
                <div>
                    <h6>EXPERIENCE MYNTRA APP ON MOBILE</h6>
                    <div>button1 button2</div>
                    <h6>KEEP IN TOUCH</h6>
                    <div>social links</div>
                </div>

                <div>
                </div>
            </div>
        </div>
    )
  }
}
