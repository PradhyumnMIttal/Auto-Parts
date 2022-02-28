import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
      <div className='checkout'>
          <div className='checkout__left'>
              {/* <img className='checkout_ad' src='https://p.kindpng.com/picc/s/611-6119676_car-png-download-turn-off-smart-board-transparent.png'></img> */}
              <div>
                  <h2 className='checkout_title'>Your Shopping Cart</h2>
                      </div>
          </div>
          <div className='checkout_right'>
              <h2>Subtotal</h2>
              <Subtotal/>
          </div>

    </div>
  )
}

export default Checkout