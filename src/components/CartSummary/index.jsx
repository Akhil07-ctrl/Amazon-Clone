
import { useState } from 'react'
import CartContext from '../../context/CartContext'
import PaymentPopup from '../PaymentPopup'
import './index.css'

const CartSummary = () => {
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false)

  const openPaymentPopup = () => {
    setIsPaymentPopupOpen(true)
  }

  const closePaymentPopup = () => {
    setIsPaymentPopupOpen(false)
  }

  return (
    <CartContext.Consumer>
      {value => {
        const { cartList } = value
        let total = 0
        cartList.forEach(eachCartItem => {
          total += eachCartItem.price * eachCartItem.quantity
        })

        return (
          <>
            <div className="cart-summary-container">
              <h1 className="order-total-value">
                <span className="order-total-label">Order Total:</span> Rs {total}
                /-
              </h1>
              <p className="total-items">{cartList.length} Items in cart</p>
              <button 
                type="button"
                onClick={openPaymentPopup}
                className="checkout-button d-sm-none"
              >
                Checkout
              </button>
            </div>
            <button 
              type="button"
              onClick={openPaymentPopup}
              className="checkout-button d-lg-none"
            >
              Checkout
            </button>

            <PaymentPopup 
              isOpen={isPaymentPopupOpen} 
              onClose={closePaymentPopup} 
              totalAmount={total}
              itemCount={cartList.length}
            />
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
